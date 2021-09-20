import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_106_253}>
        <Text style={styles.Text_106_253}>Profile</Text>
      </View>
      <View style={styles.View_106_254}>
        <Text style={styles.Text_106_254}>Edit</Text>
      </View>
      <View style={styles.View_106_302}>
        <View style={styles.View_106_303}>
          <View style={styles.View_106_304}>
            <Text style={styles.Text_106_304}>Planning</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_305}
          />
        </View>
        <View style={styles.View_106_306}>
          <View style={styles.View_106_307}>
            <Text style={styles.Text_106_307}>Invitations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_308}
          />
        </View>
        <View style={styles.View_106_309}>
          <View style={styles.View_106_310}>
            <Text style={styles.Text_106_310}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_311}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e170/526f/c9d3020a8f40dfc3510ca83723c56285"
        }}
        style={styles.ImageBackground_106_318}
      />
      <View style={styles.View_106_319}>
        <Text style={styles.Text_106_319}>Frank &amp; Maria</Text>
      </View>
      <View style={styles.View_106_320}>
        <View style={styles.View_106_321}>
          <View style={styles.View_106_322}>
            <Text style={styles.Text_106_322}>Groom</Text>
          </View>
          <View style={styles.View_106_323}>
            <Text style={styles.Text_106_323}>Frank</Text>
          </View>
        </View>
        <View style={styles.View_106_324} />
      </View>
      <View style={styles.View_106_325}>
        <View style={styles.View_106_326}>
          <View style={styles.View_106_327}>
            <Text style={styles.Text_106_327}>Bride</Text>
          </View>
          <View style={styles.View_106_328}>
            <Text style={styles.Text_106_328}>Maria</Text>
          </View>
        </View>
        <View style={styles.View_106_329} />
      </View>
      <View style={styles.View_106_330}>
        <View style={styles.View_106_331}>
          <View style={styles.View_106_332}>
            <Text style={styles.Text_106_332}>Account e-mail</Text>
          </View>
          <View style={styles.View_106_333}>
            <Text style={styles.Text_106_333}>john.doe@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_106_334} />
      </View>
      <View style={styles.View_106_356}>
        <Text style={styles.Text_106_356}>Log out</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_106_253: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_106_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_254: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("6.0109289617486334%"),
    justifyContent: "flex-start"
  },
  Text_106_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_302: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.18579234972678%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_303: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_304: {
    width: wp("29.06666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_305: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("1.0928961748633839%")
  },
  View_106_306: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_307: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_308: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  View_106_309: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)",
    overflow: "hidden"
  },
  View_106_310: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_311: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_106_318: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%"),
    top: hp("12.568306010928962%")
  },
  View_106_319: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("39.34426229508197%"),
    justifyContent: "flex-start"
  },
  Text_106_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_320: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_321: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633839%")
  },
  View_106_322: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_323: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_324: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459012%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_325: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("51.91256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_326: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863391%")
  },
  View_106_327: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_328: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_329: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459012%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_330: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.377049180327866%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_106_331: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863391%")
  },
  View_106_332: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_333: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_334: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_356: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("66.12021857923497%"),
    justifyContent: "flex-start"
  },
  Text_106_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
