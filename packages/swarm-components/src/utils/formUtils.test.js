import { getFormFieldState } from './formUtils';

describe('getFormFieldState', () => {
	it('returns disabled when props contain disabled=true', () => {
		expect(getFormFieldState({disabled: true})).toEqual('disabled');
		expect(getFormFieldState({disabled: true, error: true})).toEqual('disabled');
	});

	it('returns error when props contain error=true', () => {
		expect(getFormFieldState({error: true})).toEqual('error');
	});

	it('returns default when props do not contain disabled or error', () => {
		expect(getFormFieldState({})).toEqual('default');
	});
});
