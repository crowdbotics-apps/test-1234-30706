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
      <View style={styles.View_104_200}>
        <Text style={styles.Text_104_200}>Invitations</Text>
      </View>
      <View style={styles.View_104_292}>
        <Text style={styles.Text_104_292}>Select</Text>
      </View>
      <View style={styles.View_104_236}>
        <View style={styles.View_104_237} />
        <View style={styles.View_104_238}>
          <View style={styles.View_104_239} />
          <View style={styles.View_104_240}>
            <Text style={styles.Text_104_240}>Single</Text>
          </View>
        </View>
        <View style={styles.View_104_249}>
          <View style={styles.View_104_251}>
            <Text style={styles.Text_104_251}>Group</Text>
          </View>
        </View>
        <View style={styles.View_104_241} />
        <View style={styles.View_104_243}>
          <View style={styles.View_104_245}>
            <Text style={styles.Text_104_245}>Couple</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_104_252}>
        <View style={styles.View_104_253} />
        <View style={styles.View_104_254}>
          <Text style={styles.Text_104_254}>Guest total</Text>
        </View>
        <View style={styles.View_104_255}>
          <Text style={styles.Text_104_255}>40</Text>
        </View>
      </View>
      <View style={styles.View_104_256}>
        <View style={styles.View_104_257}>
          <View style={styles.View_104_258}>
            <Text style={styles.Text_104_258}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_259}
          />
        </View>
        <View style={styles.View_104_260} />
      </View>
      <View style={styles.View_104_262}>
        <View style={styles.View_104_263}>
          <View style={styles.View_104_264}>
            <Text style={styles.Text_104_264}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_265}
          />
        </View>
        <View style={styles.View_104_266} />
      </View>
      <View style={styles.View_104_268}>
        <View style={styles.View_104_269}>
          <View style={styles.View_104_270}>
            <Text style={styles.Text_104_270}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_271}
          />
        </View>
        <View style={styles.View_104_272} />
      </View>
      <View style={styles.View_104_274}>
        <View style={styles.View_104_275}>
          <View style={styles.View_104_276}>
            <Text style={styles.Text_104_276}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_277}
          />
        </View>
        <View style={styles.View_104_278} />
      </View>
      <View style={styles.View_104_280}>
        <View style={styles.View_104_281}>
          <View style={styles.View_104_282}>
            <Text style={styles.Text_104_282}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_283}
          />
        </View>
        <View style={styles.View_104_284} />
      </View>
      <View style={styles.View_104_286}>
        <View style={styles.View_104_287}>
          <View style={styles.View_104_288}>
            <Text style={styles.Text_104_288}>John Doe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758f/153c/df61b1df6b90f78bd73748eb7f003244"
            }}
            style={styles.ImageBackground_104_289}
          />
        </View>
        <View style={styles.View_104_290} />
      </View>
      <View style={styles.View_106_232}>
        <View style={styles.View_106_233}>
          <View style={styles.View_106_234}>
            <Text style={styles.Text_106_234}>Planning</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_235}
          />
        </View>
        <View style={styles.View_106_236}>
          <View style={styles.View_106_237}>
            <Text style={styles.Text_106_237}>Invitations</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_238}
          />
        </View>
        <View style={styles.View_106_239}>
          <View style={styles.View_106_240}>
            <Text style={styles.Text_106_240}>Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b881/b168/24cca3ce246915eeb4432a2e84d5090c"
            }}
            style={styles.ImageBackground_106_241}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_104_200: {
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
  Text_104_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_292: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.73333333333333%"),
    top: hp("6.0109289617486334%"),
    justifyContent: "flex-start"
  },
  Text_104_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_236: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.021857923497267%")
  },
  View_104_237: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_104_238: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_239: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)"
  },
  View_104_240: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_104_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_249: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666666%"),
    top: hp("0%")
  },
  View_104_251: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_104_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_241: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.400000000000006%"),
    top: hp("0%")
  },
  View_104_243: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.400000000000006%"),
    top: hp("0%")
  },
  View_104_245: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_104_245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_252: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("92.89617486338798%")
  },
  View_104_253: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(235, 235, 235, 1)",
    borderWidth: 1
  },
  View_104_254: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_104_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_255: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_104_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_256: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_257: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633874%")
  },
  View_104_258: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_259: {
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
  View_104_260: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459016%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_104_262: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_263: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633874%")
  },
  View_104_264: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_265: {
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
  View_104_266: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459016%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_104_268: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_269: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633874%")
  },
  View_104_270: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_271: {
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
  View_104_272: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459016%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_104_274: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("36.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_275: {
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
  View_104_276: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_277: {
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
  View_104_278: {
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
  View_104_280: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_281: {
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
  View_104_282: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_283: {
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
  View_104_284: {
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
  View_104_286: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.994535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_287: {
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
  View_104_288: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_104_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_289: {
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
  View_104_290: {
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
  View_106_232: {
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
  View_106_233: {
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
  View_106_234: {
    width: wp("29.06666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_235: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("1.0928961748633839%")
  },
  View_106_236: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)",
    overflow: "hidden"
  },
  View_106_237: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_238: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666677%"),
    top: hp("1.0928961748633839%")
  },
  View_106_239: {
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
  View_106_240: {
    width: wp("29.06666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_106_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_241: {
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
