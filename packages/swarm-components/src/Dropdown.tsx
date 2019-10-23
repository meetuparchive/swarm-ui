import * as React from 'react';
import Portal from '@reach/portal';
import { useRect } from '@reach/rect';
import * as ReachUtils from '@reach/utils';
import { ForwardedButton } from './Button';
import { useSSR } from './utils/useSSR';

// TODO: add the mousedown/drag/mouseup to select of native menus, will
// also help w/ remove the menu button tooltip hide-flash.

// TODO: add type-to-highlight like native menus
const RECT_DEFAULTS: DOMRect = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	x: 0,
	y: 0,
	height: 0,
	width: 0,
	toJSON: () => null
}

interface MenuCtx {
	isOpen: boolean,
	selectionIndex: number,
	closingWithClick: boolean,
	hasBeenClosed: boolean,
	buttonId: string,
	buttonRect: DOMRect, 
	dispatch: ({}: Action) => any
}

const ctxDefaults = {
	buttonId: '',
	buttonRect: {...RECT_DEFAULTS},
	isOpen: false,
	selectionIndex: -1,
	closingWithClick: false,
	hasBeenClosed: false,
	dispatch: ({}) => null
};

const MenuContext = React.createContext<MenuCtx>(ctxDefaults);

const openAtFirstItem = state => ({ isOpen: true, selectionIndex: 0 });

const closeState = state => ({
	isOpen: false,
	selectionIndex: -1,
	closingWithClick: false,
});

const genId = prefix =>
	`${prefix}-${Math.random()
		.toString(32)
		.substr(2, 8)}`;

// //////////////////////////////////////////////////////////////////////

const getInitialState = (): MenuCtx => ({
	isOpen: false,
	buttonRect: {...RECT_DEFAULTS},
	selectionIndex: -1,
	closingWithClick: false,
	hasBeenClosed: false,
	buttonId: genId('button'),
	dispatch: ({}: any) => null
});

interface Action {
	type: 'OPEN' | 'CLOSE' | 'SET_SELECTION_INDEX' | 'CLEAR_SELECTION_INDEX' | 'UPDATE_RECT' | 'SET_IS_KEYBOARD_USER',
	payload?: any
};

function reducer(state: MenuCtx, action: Action) {
	switch (action.type) {
		case 'CLOSE':
			return { ...state, isOpen: false, hasBeenClosed: true };
		case 'OPEN':
			// open at first Item 
			return { ...state, isOpen: true, selectionIndex: 0 };
		case 'SET_SELECTION_INDEX':
			return { ...state, selectionIndex: action.payload };
		case 'CLEAR_SELECTION_INDEX':
			return { ...state, selectionIndex: -1 };
		case 'UPDATE_RECT':
			return { ...state, buttonRect: action.payload };
		default:
			return { ...state}
	}
}

const checkIfStylesIncluded = () => ReachUtils.checkStyles('menu-button');


const Menu: ({ children }) => any| React.ReactElement<any> = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, getInitialState());

	const context = {
		isOpen: false,
		...state,
		dispatch,
		refs: {
			button: null,
			menu: null,
			items: [],
		},
	};

	React.useEffect(() => {
		checkIfStylesIncluded();
	}, [context.isOpen]);

	return (
		<MenuContext.Provider value={context}>
			{typeof children === 'function'
				? children({ isOpen: context.isOpen })
				: children}
		</MenuContext.Provider>
	);
};

// //////////////////////////////////////////////////////////////////////
interface MenuButtonProps {
	onClick: () => void,
	onKeyDown: () => void,
	onMouseDown: () => void,
	children: () => void,
};

const MenuButton = React.forwardRef(
	({ onClick, onKeyDown, onMouseDown, ...props }: MenuButtonProps, ref) => {
		const { isOpen, buttonId, hasBeenClosed, dispatch } = React.useContext(MenuContext);
		const buttonRef = React.useRef<HTMLButtonElement>(null);
		const buttonRect = useRect(buttonRef, isOpen);


		React.useEffect(() => {
			// need to check false specifically because isOpen is initially undefined then updates
			// to false causing dropdown buttons to be focused
			if (hasBeenClosed && !isOpen && KeyboardEvent && buttonRef.current) {
				buttonRef.current.focus();
			}
		}, [isOpen]);

		React.useEffect(() => {
			dispatch({ type: 'UPDATE_RECT', payload: buttonRect });
		}, [isOpen, buttonRect]);

		return (
			<ForwardedButton
				id={buttonId}
				aria-haspopup="menu"
				aria-expanded={isOpen}
				data-reach-menu-button
				data-button-id={buttonId}
				type="button"
				ref={buttonRef}
				onMouseDown={ReachUtils.wrapEvent(onMouseDown, () => {
					if (isOpen) {
						dispatch({ type: 'SET_IS_KEYBOARD_USER', payload: { closingWithClick: true }} );
					}
				})}
				onClick={ReachUtils.wrapEvent(onClick, () => {
					if (isOpen) {
						dispatch({ type: 'CLOSE'});
					} else {
						dispatch({ type: 'OPEN'});
					}
				})}
				onKeyDown={ReachUtils.wrapEvent(onKeyDown, event => {
					if (event.key === 'ArrowDown') {
						event.preventDefault(); // prevent scroll
						dispatch({ type: 'OPEN'});
					} else if (event.key === 'ArrowUp') {
						event.preventDefault(); // prevent scroll
						dispatch({ type: 'OPEN'});
					}
				})}
				{...props}
			/>
		);
	}
);

interface MenuItemProps {
	onSelect: () => void,
	onClick?: () => void,
	role?: string,
	state?: {},
	setState?: () => void,
	index?: number,
	onKeyDown?: () => void,
	onMouseMove?: () => void,
	onMouseLeave?: () => void,
	children?: React.ReactElement,
	_ref?: () => void,
};

const MenuItem = React.forwardRef<HTMLUnknownElement, MenuItemProps>((props, ref) => {
		const {
			onSelect,
			onClick,
			role = 'menuitem',
			index,
			onKeyDown,
			onMouseMove,
			onMouseLeave,
			setState: propSetState,
			state: propState,
			_ref,
			...rest
		} = props;

		const { selectionIndex, dispatch } = React.useContext(MenuContext);
		const isSelected = index === selectionIndex;
		const select = () => {
			onSelect();
			dispatch({ type: 'CLOSE'})
		};

		const itemRef = React.useRef<HTMLDivElement>(null);

		React.useLayoutEffect(() => {
			if (itemRef.current && selectionIndex === index) {
				itemRef.current.focus();
			} else if (itemRef.current && selectionIndex === -1) {
				itemRef.current.blur();
			}
		}, [selectionIndex]);

		return (
			<div
				{...rest}
				ref={itemRef}
				data-reach-menu-item={role === 'menuitem' ? true : undefined}
				role={role}
				tabIndex={-1}
				data-selected={role === 'menuitem' && isSelected ? true : undefined}
				onClick={ReachUtils.wrapEvent(onClick, event => {
					select();
				})}
				onKeyDown={ReachUtils.wrapEvent(onKeyDown, event => {
					if (event.key === 'Enter') {
						// prevent the button from being "clicked" by
						// this "Enter" keydown
						event.preventDefault();
						select();
					}
				})}
				onMouseMove={ReachUtils.wrapEvent(onMouseMove, event => {
					if (!isSelected) {
						dispatch({ type: 'SET_SELECTION_INDEX', payload: index })
					}
				})}
				onMouseLeave={ReachUtils.wrapEvent(onMouseLeave, event => {
          dispatch({ type: 'CLEAR_SELECTION_INDEX' })
					// clear out selection when mouse over a non-menu item child
				})}
			/>
		);
	}
);


const k = () => {};

// //////////////////////////////////////////////////////////////////////
interface MenuLinkProps {
	onKeyDown?: () => void,
	onClick?: () => void,
	component?: any,
	as?: any,
	style?: {},
	setState?: () => void,
	state?: {},
	index: number,
	_ref: () => void,
};

const MenuLink = React.forwardRef<HTMLUnknownElement, MenuLinkProps>((props, ref) => {
		const {
			onKeyDown,
			onClick,
			component: Comp,
			as: AsComp = 'a',
			style,
			setState: propSetState,
			state: propState,
			index,
			_ref,
			...rest
		} = props;
		const Link = Comp || AsComp;

		const { selectionIndex, dispatch } = React.useContext(MenuContext);

		const itemRef = React.useRef<HTMLAnchorElement>(null);

		React.useEffect(() => {
			if (itemRef.current && selectionIndex === index) {
				itemRef.current.focus();
			} else {
				itemRef.current && itemRef.current.blur();
			}
		}, [selectionIndex]);

		if (Comp) {
			console.warn(
				'[@swarm-ui/dropdown]: Please use the `as` prop instead of `component`.'
			);
		}
		return (
			<MenuItem role="none" index={index} onSelect={k} _ref={k}>
				<Link
					role="menuitem"
					data-reach-menu-item
					tabIndex="-1"
					data-selected={index === selectionIndex ? true : undefined}
					onClick={ReachUtils.wrapEvent(onClick, event => {
						dispatch({ type: 'CLOSE' })
					})}
					onKeyDown={ReachUtils.wrapEvent(onKeyDown, event => {
						if (event.key === 'Enter') {
							// prevent MenuItem's preventDefault from firing,
							// allowing this link to work w/ the keyboard
							event.stopPropagation();
						}
					})}
					ref={itemRef}
					style={style}
					{...props}
				/>
			</MenuItem>
		);
	}
);

// /////////////////////////////////////////////////////////////////


interface MenuListProps extends MenuListImplProps{
	style?: {},
	children: React.ReactElement,
	
};
// The open state is client side only
// @ts-ignore nested refs with possible null return not playing nice
const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>((props, ref) => {
	const { isOpen, buttonRect } = React.useContext(MenuContext);
	const { isBrowser } = useSSR();

	const isOpenFalseAsNullForTypescript: true | null = isOpen ? isOpen : null;
	const menuRef = React.useRef<HTMLDivElement>(isBrowser ? document.createElement('div') : null);
	const menuRect = useRect(menuRef, isOpenFalseAsNullForTypescript);
	let listStyles = isBrowser ? getStyles(buttonRect, menuRect, props.style) : {};

	React.useEffect(() => {
		listStyles = getStyles(buttonRect, menuRect, props.style);
	}, [buttonRect])

	// calculate position before draw or menu is painted for 1 frame in corner so it brings focus there
	return (
		isOpenFalseAsNullForTypescript && listStyles.top && (
			<Portal>
				<div
					data-reach-menu
					ref={menuRef}
					style={listStyles}
				>
					<MenuListImpl {...props} ref={ref} />
				</div>
			</Portal>
		)
	);
});

// super hacky to support react-hot-loader
// https://github.com/gaearon/react-hot-loader/issues/304
const isFocusableChildType = (child: any, types: Array<{name: string}> = []) => {
	// return false if child is not component
	// for falsy or null values
	if (!child) {
		return false;
	}
	const typeNames: Array<string> = types.map(t => t.name);
	const childName = child.type.displayName || child.type.name;

	return typeNames.includes(childName);
};

const getFocusableMenuChildren = (children, types) => {
	const focusable: Array<any> = [];
	React.Children.forEach(children, child => {
		if (isFocusableChildType(child, types)) focusable.push(child);
	});
	return focusable;
};

interface MenuListImplProps {
	focusableChildrenTypes: Array<any>,
	children: React.ReactElement,
	onKeyDown: () => void,
	onBlur: () => void,
};

const MenuListImpl = React.forwardRef<HTMLDivElement, MenuListImplProps>((props, ref) => {
	const {
		onKeyDown,
		children,
		focusableChildrenTypes,
		...rest
	} = props;
		const { selectionIndex, buttonId, isOpen, dispatch} = React.useContext(MenuContext);
		const focusableChildren = getFocusableMenuChildren(
			children,
			focusableChildrenTypes
		);

		const menuListRef = React.useRef<HTMLDivElement>(null);

		React.useEffect(() => {
			if (menuListRef && menuListRef.current && selectionIndex === -1) {
				menuListRef.current.focus();
			}
		}, [selectionIndex]);

		const handleClickOutside = e => {
			const activeButton = document.getElementById(buttonId);
			if (menuListRef.current && menuListRef.current.contains(e.target) || activeButton && activeButton.contains(e.target)) {
				return;
			}
			dispatch({ type: 'CLOSE'});
		};

		React.useEffect(() => {
			if (isOpen) {
				document.addEventListener('mousedown', handleClickOutside);
			} else {
				document.removeEventListener('mousedown', handleClickOutside);
			}

			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [isOpen]);

		return (
			<div
				data-reach-menu-list
				{...rest}
				role="menu"
				aria-labelledby={buttonId}
				tabIndex={-1}
				ref={menuListRef}
				onKeyDown={ReachUtils.wrapEvent(onKeyDown, event => {
					if (event.key === 'Escape') {
						dispatch({ type: 'CLOSE'})
					} else if (event.key === 'ArrowDown') {
						event.preventDefault(); // prevent window scroll
						const nextIndex = selectionIndex + 1;
						if (nextIndex !== focusableChildren.length) {
							dispatch({ type: 'SET_SELECTION_INDEX', payload: nextIndex })
						}
					} else if (event.key === 'ArrowUp') {
						event.preventDefault(); // prevent window scroll
						const nextIndex = selectionIndex - 1;
						if (nextIndex !== -1) {
							dispatch({ type: 'SET_SELECTION_INDEX', payload: nextIndex })
						}
					} else if (event.key === 'Tab') {
						event.preventDefault(); // prevent leaving
					}
				})}
			>
				{React.Children.map(children, (child: React.ReactElement<any>, index: number) => {
					if (isFocusableChildType(child, focusableChildrenTypes)) {
						const focusIndex = focusableChildren.indexOf(child);

						return React.cloneElement(child, {
							index: focusIndex,
						});
					}

					return child;
				})}
			</div>
		);
	}
);

type zIndexType = number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | undefined;
interface StyleShape {
	minWidth?: number
	left?: string | number,
	top?: string | number,
	zIndex?: zIndexType,
	opacity?: number | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | undefined
}

const getStyles = (buttonRect: DOMRect, menuRect: DOMRect, style: { zIndex?: zIndexType } = { zIndex: 'auto' }): StyleShape => {
	const haventMeasuredButtonYet = !buttonRect;
	if (haventMeasuredButtonYet) {
		return { opacity: 0 };
	}

	const haventMeasuredMenuYet = !menuRect;

	const styles: StyleShape = {
		left: `${buttonRect.left + window.pageXOffset}px`,
		top: `${buttonRect.top + buttonRect.height + window.pageYOffset}px`,
		zIndex: style.zIndex,
	};

	if (haventMeasuredMenuYet) {
		return {
			...styles,
			opacity: 0,
		};
	}

	if (buttonRect.width < 500) {
		styles.minWidth = buttonRect.width;
	}

	const collisions = {
		top: buttonRect.top - menuRect.height < 0,
		right: window.innerWidth < buttonRect.left + menuRect.width,
		bottom: window.innerHeight < buttonRect.top + menuRect.height,
		left: buttonRect.left - menuRect.width < 0,
	};

	const directionRight = collisions.right && !collisions.left;
	const directionUp = collisions.bottom && !collisions.top;

	return {
		...styles,
		left: directionRight
			? `${buttonRect.right - menuRect.width + window.pageXOffset}px`
			: `${buttonRect.left + window.pageXOffset}px`,
		top: directionUp
			? `${buttonRect.top - menuRect.height + window.pageYOffset}px`
			: `${buttonRect.top + buttonRect.height + window.pageYOffset}px`,
	};
};

export { Menu, MenuList, MenuButton, MenuLink, MenuItem };
