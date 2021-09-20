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
      <View style={styles.View_105_99}>
        <View style={styles.View_105_100}>
          <Text style={styles.Text_105_100}>Single guest</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c2/8048/79c40f19919f7ef935095f951e0d8eb7"
          }}
          style={styles.ImageBackground_105_102}
        />
      </View>
      <View style={styles.View_105_107}>
        <Text style={styles.Text_105_107}>John Doe</Text>
      </View>
      <View style={styles.View_105_139}>
        <View style={styles.View_105_108}>
          <View style={styles.View_105_109}>
            <View style={styles.View_105_110}>
              <Text style={styles.Text_105_110}>Digital invitation</Text>
            </View>
          </View>
          <View style={styles.View_105_112} />
          <View style={styles.View_105_115}>
            <View style={styles.View_105_113} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13e3/586f/4479e775afbf2751cffe9344669501e4"
              }}
              style={styles.ImageBackground_105_114}
            />
          </View>
        </View>
        <View style={styles.View_105_116}>
          <View style={styles.View_105_117}>
            <View style={styles.View_105_118}>
              <Text style={styles.Text_105_118}>Physical main invitation</Text>
            </View>
          </View>
          <View style={styles.View_105_119} />
          <View style={styles.View_105_120}>
            <View style={styles.View_105_121} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13e3/586f/4479e775afbf2751cffe9344669501e4"
              }}
              style={styles.ImageBackground_105_122}
            />
          </View>
        </View>
        <View style={styles.View_105_129}>
          <View style={styles.View_105_130}>
            <View style={styles.View_105_131}>
              <Text style={styles.Text_105_131}>Schedulet</Text>
            </View>
            <View style={styles.View_105_137}>
              <Text style={styles.Text_105_137}>02.12.2020</Text>
            </View>
          </View>
          <View style={styles.View_105_132} />
        </View>
        <View style={styles.View_105_138}>
          <Text style={styles.Text_105_138}>Invite settings</Text>
        </View>
      </View>
      <View style={styles.View_105_178}>
        <View style={styles.View_105_140}>
          <View style={styles.View_105_160}>
            <Text style={styles.Text_105_160}>Food options</Text>
          </View>
        </View>
        <View style={styles.View_105_164}>
          <View style={styles.View_105_161} />
          <View style={styles.View_105_162}>
            <Text style={styles.Text_105_162}>Chicken</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f5f/cc16/a7689048165a2ac3775fc8be392887d1"
            }}
            style={styles.ImageBackground_105_174}
          />
        </View>
        <View style={styles.View_105_165}>
          <View style={styles.View_105_166} />
          <View style={styles.View_105_167}>
            <Text style={styles.Text_105_167}>Steak</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f592/fb2a/18c4f0b5206f4ca7f545a73560787358"
            }}
            style={styles.ImageBackground_105_168}
          />
        </View>
        <View style={styles.View_105_169}>
          <View style={styles.View_105_170} />
          <View style={styles.View_105_171}>
            <Text style={styles.Text_105_171}>Fish</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f592/fb2a/18c4f0b5206f4ca7f545a73560787358"
            }}
            style={styles.ImageBackground_105_172}
          />
        </View>
      </View>
      <View style={styles.View_105_175}>
        <View style={styles.View_105_176} />
        <View style={styles.View_105_177}>
          <Text style={styles.Text_105_177}>Preview</Text>
        </View>
      </View>
      <View style={styles.View_105_213}>
        <View style={styles.View_105_179}>
          <View style={styles.View_105_180}>
            <View style={styles.View_105_181}>
              <Text style={styles.Text_105_181}>Choose style</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_105_202}>
          <View style={styles.View_105_196} />
          <View style={styles.View_105_199} />
          <View style={styles.View_105_197} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
            }}
            style={styles.ImageBackground_105_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ba/0f41/3d9be212ebb66512c82c03cce1d76cf0"
            }}
            style={styles.ImageBackground_105_212}
          />
          <View style={styles.View_105_200} />
          <View style={styles.View_105_198} />
          <View style={styles.View_105_201} />
        </View>
        <View style={styles.View_105_203}>
          <View style={styles.View_105_204} />
          <View style={styles.View_105_205} />
          <View style={styles.View_105_206} />
          <View style={styles.View_105_207} />
          <View style={styles.View_105_208} />
          <View style={styles.View_105_209} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_105_99: {
    width: wp("80.80000000000001%"),
    minWidth: wp("80.80000000000001%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%")
  },
  View_105_100: {
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
  Text_105_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_102: {
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
  View_105_107: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.021857923497267%"),
    justifyContent: "flex-start"
  },
  Text_105_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_139: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("20.21857923497268%")
  },
  View_105_108: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_105_109: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633874%")
  },
  View_105_110: {
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
  Text_105_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_112: {
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
  View_105_115: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_105_113: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  ImageBackground_105_114: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158495%")
  },
  View_105_116: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_105_117: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633874%")
  },
  View_105_118: {
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
  Text_105_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_119: {
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
  View_105_120: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_105_121: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  ImageBackground_105_122: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158495%")
  },
  View_105_129: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_105_130: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863391%")
  },
  View_105_131: {
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
  Text_105_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_137: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_132: {
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
  View_105_138: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_178: {
    width: wp("97.06666666666666%"),
    minWidth: wp("97.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("45.3551912568306%")
  },
  View_105_140: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_160: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_164: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  View_105_161: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_162: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_105_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_174: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.639344262295083%")
  },
  View_105_165: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("4.918032786885249%")
  },
  View_105_166: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_167: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_105_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_168: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("1.639344262295083%")
  },
  View_105_169: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("4.918032786885249%")
  },
  View_105_170: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_171: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_105_171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_172: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.639344262295083%")
  },
  View_105_175: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("101.63934426229508%")
  },
  View_105_176: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_177: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_105_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_213: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("61.20218579234973%")
  },
  View_105_179: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_180: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_181: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_202: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  View_105_196: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_199: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_197: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  ImageBackground_105_211: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_105_212: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2.5956284153005527%")
  },
  View_105_200: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.39999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_198: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_201: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_203: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502728%")
  },
  View_105_204: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_205: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_206: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_207: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.39999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_208: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  },
  View_105_209: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 235, 235, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
