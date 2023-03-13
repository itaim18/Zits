import {
  ANT_ICON_NAMES,
  FANISTO_ICON_NAMES,
  FEATHER_ICON_NAMES,
  FONTAWESOME_ICON_NAMES,
  FOUNDATION_ICON_NAMES,
  ICON_TYPES,
  IONICONS_ICON_NAMES,
} from './enums';

// Async
export const wait = (delay: number): Promise<void> =>
  new Promise(res => setTimeout(res, delay));

export const iconsTypes = Object.values(ICON_TYPES);

export const getIconNamesByType = {
  [ICON_TYPES.Ant]: Object.values(ANT_ICON_NAMES),
  [ICON_TYPES.Feather]: Object.values(FEATHER_ICON_NAMES),
  [ICON_TYPES.FontAwesome]: Object.values(FONTAWESOME_ICON_NAMES),
  [ICON_TYPES.Foundation]: Object.values(FOUNDATION_ICON_NAMES),
  [ICON_TYPES.Fontisto]: Object.values(FANISTO_ICON_NAMES),
  [ICON_TYPES.Ionicons]: Object.values(IONICONS_ICON_NAMES),
};

export const LogColors = {
  Red: '\u001b[1;31m',
  Green: '\u001b[1;32m',
  Yellow: '\u001b[1;33m',
  Blue: '\u001b[1;34m',
  Purple: '\u001b[1;35m',
  Cyan: '\u001b[1;36m',
};

export const logWithColor = (
  title: string,
  msg?: any,
  color?: keyof typeof LogColors,
) => {
  'worklet';
  return console.log(
    `${LogColors[color || 'Green']}${title}::: ${
      typeof msg !== 'string' ? JSON.stringify(msg || '') : msg || ''
    }`,
  );
};

export const isValidInputString = (input: string) => {
  return input.length < 13;
};
