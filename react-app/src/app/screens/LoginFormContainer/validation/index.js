export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

export const maxLength = value => (value.length > 10 ? 'Value is too long' : undefined);
