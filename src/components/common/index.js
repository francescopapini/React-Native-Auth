// this syntax is a shortcut from doing import and export
// when this shortcut is used we need to export the components in the individual
// files withot the word 'default' and with this notatio { Button: Button },
// or just { Button } if the name is the same

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';
