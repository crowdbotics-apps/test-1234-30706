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
      <View style={styles.View_106_358}>
        <Text style={styles.Text_106_358}>Profile</Text>
      </View>
      <View style={styles.View_106_359}>
        <Text style={styles.Text_106_359}>Done</Text>
      </View>
      <View style={styles.View_106_360}>
        <View style={styles.View_106_361}>
          <View style={styles.View_106_362}>
            <Text style={styles.Text_106_362}>Planning</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_363}
          />
        </View>
        <View style={styles.View_106_364}>
          <View style={styles.View_106_365}>
            <Text style={styles.Text_106_365}>Invitations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_366}
          />
        </View>
        <View style={styles.View_106_367}>
          <View style={styles.View_106_368}>
            <Text style={styles.Text_106_368}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_369}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e170/526f/c9d3020a8f40dfc3510ca83723c56285"
        }}
        style={styles.ImageBackground_106_370}
      />
      <View style={styles.View_106_388}>
        <Text style={styles.Text_106_388}>Update photo</Text>
      </View>
      <View style={styles.View_106_371}>
        <Text style={styles.Text_106_371}>Frank &amp; Maria</Text>
      </View>
      <View style={styles.View_106_372}>
        <View style={styles.View_106_373}>
          <View style={styles.View_106_374}>
            <Text style={styles.Text_106_374}>Groom</Text>
          </View>
          <View style={styles.View_106_375}>
            <Text style={styles.Text_106_375}>Frank</Text>
          </View>
        </View>
        <View style={styles.View_106_376} />
      </View>
      <View style={styles.View_106_377}>
        <View style={styles.View_106_378}>
          <View style={styles.View_106_379}>
            <Text style={styles.Text_106_379}>Bride</Text>
          </View>
          <View style={styles.View_106_380}>
            <Text style={styles.Text_106_380}>Maria</Text>
          </View>
        </View>
        <View style={styles.View_106_381} />
      </View>
      <View style={styles.View_106_382}>
        <View style={styles.View_106_383}>
          <View style={styles.View_106_384}>
            <Text style={styles.Text_106_384}>Account e-mail</Text>
          </View>
          <View style={styles.View_106_385}>
            <Text style={styles.Text_106_385}>john.doe@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_106_386} />
      </View>
      <View style={styles.View_106_387}>
        <Text style={styles.Text_106_387}>Change password</Text>
      </View>
      <View style={styles.View_106_389}>
        <Text style={styles.Text_106_389}>Log out</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_106_358: {
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
  Text_106_358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_359: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("6.0109289617486334%"),
    justifyContent: "flex-start"
  },
  Text_106_359: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_360: {
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
  View_106_361: {
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
  View_106_362: {
    width: wp("29.06666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_363: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("1.0928961748633839%")
  },
  View_106_364: {
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
  View_106_365: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_365: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_366: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  View_106_367: {
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
  View_106_368: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_369: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_106_370: {
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
  View_106_388: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("23.224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_106_388: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_371: {
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
  Text_106_371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_372: {
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
  View_106_373: {
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
  View_106_374: {
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
  Text_106_374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_375: {
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
  Text_106_375: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_376: {
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
  View_106_377: {
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
  View_106_378: {
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
  View_106_379: {
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
  Text_106_379: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_380: {
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
  Text_106_380: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_381: {
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
  View_106_382: {
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
  View_106_383: {
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
  View_106_384: {
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
  Text_106_384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_385: {
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
  Text_106_385: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_386: {
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
  View_106_387: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("66.12021857923497%"),
    justifyContent: "flex-start"
  },
  Text_106_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_389: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("72.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_106_389: {
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
