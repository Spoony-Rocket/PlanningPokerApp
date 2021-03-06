import React, { useEffect, useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Appearance } from 'react-native-appearance';
import { Theme, useTheme } from 'react-native-paper';

export const useSystemDarkMode = () => {
  const [isSystemDark, setSystemDark] = useState<boolean>(
    Appearance.getColorScheme() === 'dark',
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemDark(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  return isSystemDark;
};

export const useManualDarkMode = () => {
  const isSystemDark = useSystemDarkMode();
  const [isDark, setIsDark] = useState(isSystemDark);

  useEffect(() => {
    setIsDark(isSystemDark);
  }, [isSystemDark]);

  return [isDark, setIsDark];
};

export const useStyleSheet = <T>(createStyleSheet: (theme: Theme) => T) => {
  const theme = useTheme();
  const [styles, setStyles] = useState<T>(createStyleSheet(theme));

  useEffect(() => {
    setStyles(createStyleSheet(theme));
  }, [createStyleSheet, theme]);

  return styles;
};
