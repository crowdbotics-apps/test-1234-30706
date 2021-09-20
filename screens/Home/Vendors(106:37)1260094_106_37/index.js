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
      <View style={styles.View_106_38}>
        <View style={styles.View_106_39}>
          <Text style={styles.Text_106_39}>Vendors</Text>
        </View>
        <View style={styles.View_106_107}>
          <Text style={styles.Text_106_107}>Add</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c2/8048/79c40f19919f7ef935095f951e0d8eb7"
          }}
          style={styles.ImageBackground_106_41}
        />
      </View>
      <View style={styles.View_106_73}>
        <View style={styles.View_106_74} />
        <View style={styles.View_106_75}>
          <Text style={styles.Text_106_75}>Search</Text>
        </View>
      </View>
      <View style={styles.View_106_81}>
        <View style={styles.View_106_76} />
        <View style={styles.View_106_78}>
          <Text style={styles.Text_106_78}>Places</Text>
        </View>
      </View>
      <View style={styles.View_106_82}>
        <View style={styles.View_106_83} />
        <View style={styles.View_106_84}>
          <Text style={styles.Text_106_84}>Places</Text>
        </View>
      </View>
      <View style={styles.View_106_88}>
        <View style={styles.View_106_89} />
        <View style={styles.View_106_90}>
          <Text style={styles.Text_106_90}>Places</Text>
        </View>
      </View>
      <View style={styles.View_106_94}>
        <View style={styles.View_106_95} />
        <View style={styles.View_106_96}>
          <Text style={styles.Text_106_96}>Places</Text>
        </View>
      </View>
      <View style={styles.View_106_100}>
        <View style={styles.View_106_101} />
        <View style={styles.View_106_102}>
          <Text style={styles.Text_106_102}>Places</Text>
        </View>
      </View>
      <View style={styles.View_106_80}>
        <View style={styles.View_106_77} />
        <View style={styles.View_106_79}>
          <Text style={styles.Text_106_79}>Photographers</Text>
        </View>
      </View>
      <View style={styles.View_106_85}>
        <View style={styles.View_106_86} />
        <View style={styles.View_106_87}>
          <Text style={styles.Text_106_87}>Photographers</Text>
        </View>
      </View>
      <View style={styles.View_106_91}>
        <View style={styles.View_106_92} />
        <View style={styles.View_106_93}>
          <Text style={styles.Text_106_93}>Photographers</Text>
        </View>
      </View>
      <View style={styles.View_106_97}>
        <View style={styles.View_106_98} />
        <View style={styles.View_106_99}>
          <Text style={styles.Text_106_99}>Photographers</Text>
        </View>
      </View>
      <View style={styles.View_106_103}>
        <View style={styles.View_106_104} />
        <View style={styles.View_106_105}>
          <Text style={styles.Text_106_105}>Photographers</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_106_38: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%")
  },
  View_106_39: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_107: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.73333333333333%"),
    top: hp("0.5464480874316937%"),
    justifyContent: "flex-start"
  },
  Text_106_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_41: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316937%")
  },
  View_106_73: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.568306010928962%")
  },
  View_106_74: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_75: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.5464480874316937%"),
    justifyContent: "flex-start"
  },
  Text_106_75: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_81: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("19.672131147540984%")
  },
  View_106_76: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_78: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633874%"),
    justifyContent: "flex-start"
  },
  Text_106_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_82: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.92896174863388%")
  },
  View_106_83: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_84: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_106_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_88: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("52.18579234972678%")
  },
  View_106_89: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_90: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_94: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("68.44262295081968%")
  },
  View_106_95: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_96: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_100: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.69945355191257%")
  },
  View_106_101: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_102: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_80: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("19.672131147540984%")
  },
  View_106_77: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_79: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633874%"),
    justifyContent: "flex-start"
  },
  Text_106_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_85: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("35.92896174863388%")
  },
  View_106_86: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_87: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_106_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_91: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("52.18579234972678%")
  },
  View_106_92: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_93: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_93: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_97: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("68.44262295081968%")
  },
  View_106_98: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_99: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_103: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("84.69945355191257%")
  },
  View_106_104: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_106_105: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_106_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
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
