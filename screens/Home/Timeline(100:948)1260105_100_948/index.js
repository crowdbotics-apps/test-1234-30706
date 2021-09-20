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
      <View style={styles.View_100_949}>
        <View style={styles.View_100_950}>
          <Text style={styles.Text_100_950}>Budgeter</Text>
        </View>
        <View style={styles.View_100_999}>
          <Text style={styles.Text_100_999}>Delete</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c2/8048/79c40f19919f7ef935095f951e0d8eb7"
          }}
          style={styles.ImageBackground_100_952}
        />
      </View>
      <View style={styles.View_100_972} />
      <View style={styles.View_100_973}>
        <Text style={styles.Text_100_973}>Search</Text>
      </View>
      <View style={styles.View_100_974} />
      <View style={styles.View_100_975}>
        <View style={styles.View_100_976}>
          <Text style={styles.Text_100_976}>10:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb23/6ad8/a902742c703b3db4a0947b15026288fc"
          }}
          style={styles.ImageBackground_100_977}
        />
        <View style={styles.View_100_978}>
          <Text style={styles.Text_100_978}>Start ceremony</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880c/cf80/1c4b625370256f3ee08325d3c960cf2e"
          }}
          style={styles.ImageBackground_100_993}
        />
      </View>
      <View style={styles.View_100_979}>
        <View style={styles.View_100_980}>
          <Text style={styles.Text_100_980}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb23/6ad8/a902742c703b3db4a0947b15026288fc"
          }}
          style={styles.ImageBackground_100_981}
        />
        <View style={styles.View_100_982}>
          <Text style={styles.Text_100_982}>Buffet</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880c/cf80/1c4b625370256f3ee08325d3c960cf2e"
          }}
          style={styles.ImageBackground_100_994}
        />
      </View>
      <View style={styles.View_100_983}>
        <View style={styles.View_100_984}>
          <Text style={styles.Text_100_984}>18:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb23/6ad8/a902742c703b3db4a0947b15026288fc"
          }}
          style={styles.ImageBackground_100_985}
        />
        <View style={styles.View_100_986}>
          <Text style={styles.Text_100_986}>Concert</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880c/cf80/1c4b625370256f3ee08325d3c960cf2e"
          }}
          style={styles.ImageBackground_100_995}
        />
      </View>
      <View style={styles.View_100_987}>
        <View style={styles.View_100_988}>
          <Text style={styles.Text_100_988}>20:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb23/6ad8/a902742c703b3db4a0947b15026288fc"
          }}
          style={styles.ImageBackground_100_989}
        />
        <View style={styles.View_100_990}>
          <Text style={styles.Text_100_990}>End of ceremony</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880c/cf80/1c4b625370256f3ee08325d3c960cf2e"
          }}
          style={styles.ImageBackground_100_996}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_100_949: {
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
  View_100_950: {
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
  Text_100_950: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_999: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("0.5464480874316937%"),
    justifyContent: "flex-start"
  },
  Text_100_999: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_952: {
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
  View_100_972: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.568306010928962%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_100_973: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("13.114754098360656%"),
    justifyContent: "flex-start"
  },
  Text_100_973: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_100_974: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("22.814207650273225%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_100_975: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("23.497267759562842%")
  },
  View_100_976: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "flex-start"
  },
  Text_100_976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_977: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("1.0928961748633874%")
  },
  View_100_978: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_993: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_100_979: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("29.508196721311474%")
  },
  View_100_980: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_100_980: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_981: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("1.092896174863391%")
  },
  View_100_982: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_994: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_100_983: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.51912568306011%")
  },
  View_100_984: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "flex-start"
  },
  Text_100_984: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_985: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("1.092896174863391%")
  },
  View_100_986: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_986: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_995: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  },
  View_100_987: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("41.53005464480874%")
  },
  View_100_988: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_100_988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_989: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("1.0928961748633839%")
  },
  View_100_990: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_100_990: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_100_996: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
