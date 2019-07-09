/* eslint-disable */
import React, {
	createContext,
	Children,
	useContext,
	useState,
	useEffect,
	useRef,
} from 'react';
import Portal from '@reach/portal';
import Rect, { useRect } from '@reach/rect';
import WindowSize from '@reach/window-size';
import { node, func, object, string, number, oneOfType, any } from 'prop-types';
import { wrapEvent, checkStyles, assignRef } from '@reach/utils';
import { ForwardedButton } from './Button';

// TODO: add the mousedown/drag/mouseup to select of native menus, will
// also help w/ remove the menu button tooltip hide-flash.

// TODO: add type-to-highlight like native menus

let MenuContext = createContext();

let checkIfAppManagedFocus = ({ refs, state }) => {
	if (!state.isOpen && !!refs.menu) {
		return !refs.menu.contains(document.activeElement);
	}
	return false;
};

let openAtFirstItem = state => ({ isOpen: true, selectionIndex: 0 });

let close = state => ({
	isOpen: false,
	selectionIndex: -1,
	closingWithClick: false,
});

let selectItemAtIndex = index => ({
	selectionIndex: index,
});

let genId = prefix =>
	`${prefix}-${Math.random()
		.toString(32)
		.substr(2, 8)}`;

////////////////////////////////////////////////////////////////////////

let getInitialMenuState = {
	// isOpen: false,
	buttonRect: undefined,
	selectionIndex: -1,
	closingWithClick: false,
	buttonId: genId('button'),
};

let checkIfStylesIncluded = () => checkStyles('menu-button');

let Menu = ({ children }) => {
	const [state, setState] = useState(getInitialMenuState);
	const [appManagedFocus, setAppManagedFocus] = useState(false);

	let context = {
		state,
		setState,
		refs: {
			button: null,
			menu: null,
			items: [],
		},
	};

	useEffect(() => {
		checkIfStylesIncluded();
		setAppManagedFocus(checkIfAppManagedFocus(context));
	}, [state.isOpen]);

	return (
		<MenuContext.Provider value={context}>
			{typeof children === 'function'
				? children({ isOpen: context.state.isOpen })
				: children}
		</MenuContext.Provider>
	);
};

Menu.propTypes = {
	children: oneOfType([func, node]),
};

////////////////////////////////////////////////////////////////////////
let MenuButton = React.forwardRef(
	({ onClick, onKeyDown, onMouseDown, ...props }, ref) => {
		const { refs, state, setState } = useContext(MenuContext);
		const buttonRef = useRef(null);
		const buttonRect = useRect(buttonRef, state.isOpen);

		useEffect(() => {
			setState({ ...state, buttonRect });
			if (!state.isOpen) {
				buttonRef.current.focus();
			}
		}, [state.isOpen]);

		return (
			<ForwardedButton
				id={state.buttonId}
				aria-haspopup="menu"
				aria-expanded={state.isOpen}
				data-reach-menu-button
				type="button"
				ref={buttonRef}
				onMouseDown={wrapEvent(onMouseDown, () => {
					if (state.isOpen) {
						setState({ ...state, closingWithClick: true });
					}
				})}
				onClick={wrapEvent(onClick, () => {
					if (state.isOpen) {
						setState({ ...state, ...close() });
					} else {
						setState({ ...state, ...openAtFirstItem() });
					}
				})}
				onKeyDown={wrapEvent(onKeyDown, event => {
					if (event.key === 'ArrowDown') {
						event.preventDefault(); // prevent scroll
						setState({ ...state, ...openAtFirstItem() });
					} else if (event.key === 'ArrowUp') {
						event.preventDefault(); // prevent scroll
						setState({ ...state, ...openAtFirstItem() });
					}
				})}
				{...props}
			/>
		);
	}
);

MenuButton.propTypes = {
	onClick: func,
	onKeyDown: func,
	children: node,
};

let MenuItem = React.forwardRef(
	(
		{
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
		},
		ref
	) => {
		const { state, setState } = useContext(MenuContext);
		let isSelected = state && index === state.selectionIndex;
		let select = () => {
			onSelect();
			setState({ ...state, ...close() });
		};

		const itemRef = useRef(null);

		// assignRef(ref, node);
		// assignRef(_ref, node);

		useEffect(() => {
			if (itemRef.current && state.selectionIndex === index) {
				itemRef.current.focus();
			}
		}, [state.selectionIndex]);
		return (
			<div
				{...rest}
				ref={itemRef}
				data-reach-menu-item={role === 'menuitem' ? true : undefined}
				role={role}
				tabIndex="-1"
				data-selected={role === 'menuitem' && isSelected ? true : undefined}
				onClick={wrapEvent(onClick, event => {
					select();
				})}
				onKeyDown={wrapEvent(onKeyDown, event => {
					if (event.key === 'Enter') {
						// prevent the button from being "clicked" by
						// this "Enter" keydown
						event.preventDefault();
						select();
					}
				})}
				onMouseMove={wrapEvent(onMouseMove, event => {
					if (!isSelected) {
						setState({ ...state, ...selectItemAtIndex(index) });
					}
				})}
				onMouseLeave={wrapEvent(onMouseLeave, event => {
					// clear out selection when mouse over a non-menu item child
					setState({ ...state, selectionIndex: -1 });
				})}
			/>
		);
	}
);

MenuItem.propTypes = {
	onSelect: func.isRequired,
	onClick: func,
	role: string,
	state: object,
	setState: func,
	index: number,
	onKeyDown: func,
	onMouseMove: func,
	_ref: func,
};

let k = () => {};

////////////////////////////////////////////////////////////////////////
let MenuLink = React.forwardRef(
	(
		{
			onKeyDown,
			onClick,
			component: Comp,
			as: AsComp = 'a',
			style,
			setState,
			state,
			index,
			_ref,
			...props
		},
		ref
	) => {
		const Link = Comp || AsComp;
		if (Comp) {
			console.warn(
				'[@reach/menu-button]: Please use the `as` prop instead of `component`.'
			);
		}
		return (
			<MenuItem role="none" index={index} onSelect={k} _ref={k}>
				<Link
					role="menuitem"
					data-reach-menu-item
					tabIndex="-1"
					data-selected={index === state.selectionIndex ? true : undefined}
					onClick={wrapEvent(onClick, event => {
						setState({ ...state, ...close() });
					})}
					onKeyDown={wrapEvent(onKeyDown, event => {
						if (event.key === 'Enter') {
							// prevent MenuItem's preventDefault from firing,
							// allowing this link to work w/ the keyboard
							event.stopPropagation();
						}
					})}
					ref={node => {
						assignRef(_ref, node);
						assignRef(ref, node);
					}}
					style={{ ...style }}
					{...props}
				/>
			</MenuItem>
		);
	}
);

MenuLink.propTypes = {
	onKeyDown: func,
	onClick: func,
	component: any,
	as: any,
	style: object,
	setState: func,
	state: object,
	index: number,
	_ref: func,
};
///////////////////////////////////////////////////////////////////

let MenuList = React.forwardRef((props, ref) => {
	const { state, setState, refs } = useContext(MenuContext);

	return (
		state.isOpen && (
			<Portal>
				<WindowSize>
					{() => (
						<Rect>
							{({ rect: menuRect, ref: menuRef }) => (
								<div
									data-reach-menu
									ref={menuRef}
									style={getStyles(state.buttonRect, menuRect)}
								>
									<MenuListImpl {...props} ref={ref} />
								</div>
							)}
						</Rect>
					)}
				</WindowSize>
			</Portal>
		)
	);
});

MenuList.propTypes = {
	children: node,
};

let isFocusableChildType = (child, types = []) => types.includes(child.type);
let getFocusableMenuChildren = (children, types) => {
	let focusable = [];
	Children.forEach(children, child => {
		if (isFocusableChildType(child, types)) focusable.push(child);
	});
	return focusable;
};

let MenuListImpl = React.forwardRef(
	(
		{
			children,
			onKeyDown,
			onBlur,
			focusableChildrenTypes = [MenuItem, MenuLink],
			...rest
		},
		ref
	) => {
		const { state, setState, refs } = useContext(MenuContext);
		let focusableChildren = getFocusableMenuChildren(
			children,
			focusableChildrenTypes
		);
		return (
			<div
				data-reach-menu-list
				{...rest}
				role="menu"
				aria-labelledby={state.buttonId}
				tabIndex="-1"
				ref={node => {
					refs.menu = node;
					assignRef(ref, node);
				}}
				onBlur={event => {
					if (!state.closingWithClick && !refs.menu.contains(event.relatedTarget)) {
						setState({ ...state, ...close() });
					}
				}}
				onKeyDown={wrapEvent(onKeyDown, event => {
					if (event.key === 'Escape') {
						setState({ ...state, ...close() });
					} else if (event.key === 'ArrowDown') {
						event.preventDefault(); // prevent window scroll
						let nextIndex = state.selectionIndex + 1;
						if (nextIndex !== focusableChildren.length) {
							setState({ ...state, selectionIndex: nextIndex });
						}
					} else if (event.key === 'ArrowUp') {
						event.preventDefault(); // prevent window scroll
						let nextIndex = state.selectionIndex - 1;
						if (nextIndex !== -1) {
							setState({ ...state, selectionIndex: nextIndex });
						}
					} else if (event.key === 'Tab') {
						event.preventDefault(); // prevent leaving
					}
				})}
			>
				{Children.map(children, (child, index) => {
					if (isFocusableChildType(child, focusableChildrenTypes)) {
						let focusIndex = focusableChildren.indexOf(child);

						return React.cloneElement(child, {
							setState,
							state,
							index: focusIndex,
							_ref: node => (refs.items[focusIndex] = node),
						});
					}

					return child;
				})}
			</div>
		);
	}
);

MenuListImpl.propTypes = {
	refs: object,
	state: object,
	setState: func,
	children: node,
	onKeyDown: func,
	onBlur: func,
};

let getStyles = (buttonRect, menuRect) => {
	let haventMeasuredButtonYet = !buttonRect;
	if (haventMeasuredButtonYet) {
		return { opacity: 0 };
	}

	let haventMeasuredMenuYet = !menuRect;

	let styles = {
		left: `${buttonRect.left + window.pageXOffset}px`,
		top: `${buttonRect.top + buttonRect.height + window.pageYOffset}px`,
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

	let collisions = {
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
/* eslint-enable */
