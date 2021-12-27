import { ColorMode, theme, useColorMode } from "native-base";
import { Linking, Alert } from "react-native";
import { InAppBrowser } from "react-native-inappbrowser-reborn";

export default async function openLink(url: string, colorMode: ColorMode) {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: "cancel",
        preferredBarTintColor:
          colorMode === "dark"
            ? theme.colors["coolGray"]["900"]
            : theme.colors["primary"]["900"],
        preferredControlTintColor: "white",
        readerMode: false,
        animated: true,
        modalPresentationStyle: "fullScreen",
        modalTransitionStyle: "coverVertical",
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor:
          colorMode === "dark"
            ? theme.colors["coolGray"]["900"]
            : theme.colors["primary"]["900"],
        secondaryToolbarColor: "black",
        navigationBarColor: "black",
        navigationBarDividerColor: "white",
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: "slide_in_right",
          startExit: "slide_out_left",
          endEnter: "slide_in_left",
          endExit: "slide_out_right",
        },
        // headers: {
        //   "my-custom-header": "my custom header value",
        // },
      });
      Alert.alert(JSON.stringify(result));
    } else Linking.openURL(url);
  } catch (error) {
    Alert.alert(error.message);
  }
}
