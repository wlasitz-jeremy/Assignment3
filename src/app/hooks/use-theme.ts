import { colors } from "../../constants/theme";
import { useColorScheme } from './use-color-theme';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  return colors[theme];
}
