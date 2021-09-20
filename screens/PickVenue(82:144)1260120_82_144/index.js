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
      <View style={styles.View_82_145}>
        <View style={styles.View_82_146} />
        <View style={styles.View_82_147}>
          <Text style={styles.Text_82_147}>Done</Text>
        </View>
      </View>
      <View style={styles.View_82_148}>
        <Text style={styles.Text_82_148}>Pick a venue</Text>
      </View>
      <View style={styles.View_82_151}>
        <Text style={styles.Text_82_151}>Back</Text>
      </View>
      <View style={styles.View_82_205}>
        <Text style={styles.Text_82_205}>Skip</Text>
      </View>
      <View style={styles.View_82_219}>
        <View style={styles.View_82_220}>
          <Text style={styles.Text_82_220}>Venue name</Text>
        </View>
        <View style={styles.View_82_221} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_82_145: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("94.53551912568307%")
  },
  View_82_146: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_82_147: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "center"
  },
  Text_82_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_148: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("8.19672131147541%"),
    justifyContent: "flex-start"
  },
  Text_82_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_151: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("8.19672131147541%"),
    justifyContent: "center"
  },
  Text_82_151: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_205: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("8.19672131147541%"),
    justifyContent: "center"
  },
  Text_82_205: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_219: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("53.278688524590166%")
  },
  View_82_220: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_82_220: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_221: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
