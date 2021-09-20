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
      <View style={styles.View_95_49}>
        <Text style={styles.Text_95_49}>Planning</Text>
      </View>
      <View style={styles.View_96_6}>
        <View style={styles.View_96_0} />
        <View style={styles.View_96_4}>
          <Text style={styles.Text_96_4}>ToDo List</Text>
        </View>
        <View style={styles.View_96_5}>
          <Text style={styles.Text_96_5}>12 items</Text>
        </View>
      </View>
      <View style={styles.View_96_11}>
        <View style={styles.View_96_12} />
        <View style={styles.View_96_13}>
          <Text style={styles.Text_96_13}>Timeline</Text>
        </View>
        <View style={styles.View_96_14}>
          <Text style={styles.Text_96_14}>12 items</Text>
        </View>
      </View>
      <View style={styles.View_105_454}>
        <View style={styles.View_105_455} />
        <View style={styles.View_105_456}>
          <Text style={styles.Text_105_456}>Vendors</Text>
        </View>
        <View style={styles.View_105_457}>
          <Text style={styles.Text_105_457}>12 items</Text>
        </View>
      </View>
      <View style={styles.View_96_7}>
        <View style={styles.View_96_8} />
        <View style={styles.View_96_9}>
          <Text style={styles.Text_96_9}>Budgeter</Text>
        </View>
        <View style={styles.View_96_10}>
          <Text style={styles.Text_96_10}>12 items</Text>
        </View>
      </View>
      <View style={styles.View_96_19}>
        <View style={styles.View_96_20} />
        <View style={styles.View_96_21}>
          <Text style={styles.Text_96_21}>Guest planner</Text>
        </View>
        <View style={styles.View_96_22}>
          <Text style={styles.Text_96_22}>40 guests</Text>
        </View>
      </View>
      <View style={styles.View_106_222}>
        <View style={styles.View_106_223}>
          <View style={styles.View_106_224}>
            <Text style={styles.Text_106_224}>Planning</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_225}
          />
        </View>
        <View style={styles.View_106_226}>
          <View style={styles.View_106_227}>
            <Text style={styles.Text_106_227}>Invitations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_228}
          />
        </View>
        <View style={styles.View_106_229}>
          <View style={styles.View_106_230}>
            <Text style={styles.Text_106_230}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_231}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_95_49: {
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
  Text_95_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_6: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.568306010928962%")
  },
  View_96_0: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_96_4: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_96_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_5: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("12.021857923497267%"),
    justifyContent: "flex-start"
  },
  Text_96_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_11: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("31.147540983606557%")
  },
  View_96_12: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_96_13: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633874%"),
    justifyContent: "flex-start"
  },
  Text_96_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_14: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("12.021857923497269%"),
    justifyContent: "flex-start"
  },
  Text_96_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_454: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("49.72677595628415%")
  },
  View_105_455: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_456: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_105_456: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_457: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("12.021857923497272%"),
    justifyContent: "flex-start"
  },
  Text_105_457: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_7: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("12.568306010928962%")
  },
  View_96_8: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_96_9: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_96_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_10: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("12.021857923497267%"),
    justifyContent: "flex-start"
  },
  Text_96_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_19: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("31.147540983606557%")
  },
  View_96_20: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_96_21: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633874%"),
    justifyContent: "flex-start"
  },
  Text_96_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_22: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("12.021857923497269%"),
    justifyContent: "flex-start"
  },
  Text_96_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_222: {
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
  View_106_223: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)",
    overflow: "hidden"
  },
  View_106_224: {
    width: wp("29.06666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_225: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("1.0928961748633839%")
  },
  View_106_226: {
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
  View_106_227: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_228: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  View_106_229: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_230: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_231: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
