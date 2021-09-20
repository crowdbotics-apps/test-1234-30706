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
      <View style={styles.View_82_71}>
        <View style={styles.View_82_72} />
        <View style={styles.View_82_73}>
          <Text style={styles.Text_82_73}>Next</Text>
        </View>
      </View>
      <View style={styles.View_82_74}>
        <Text style={styles.Text_82_74}>Choose event date</Text>
      </View>
      <View style={styles.View_82_75}>
        <View style={styles.View_82_76}>
          <Text style={styles.Text_82_76}>20.11.2020</Text>
        </View>
      </View>
      <View style={styles.View_82_78}>
        <Text style={styles.Text_82_78}>Back</Text>
      </View>
      <View style={styles.View_82_82}>
        <View style={styles.View_82_83}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b9/523f/cd5f2e9110fb785e7d675a414143f7bd"
            }}
            style={styles.ImageBackground_82_84}
          />
          <View style={styles.View_82_141}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3253/8ead/0d526cc95310929d28b525f05bc74f5a"
              }}
              style={styles.ImageBackground_82_142}
            />
          </View>
        </View>
        <View style={styles.View_82_86}>
          <View style={styles.View_82_87} />
          <View style={styles.View_82_88}>
            <View style={styles.View_82_89}>
              <Text style={styles.Text_82_89}>1998</Text>
            </View>
            <View style={styles.View_82_90}>
              <Text style={styles.Text_82_90}>December</Text>
            </View>
            <View style={styles.View_82_91}>
              <Text style={styles.Text_82_91}>23</Text>
            </View>
          </View>
          <View style={styles.View_82_92}>
            <View style={styles.View_82_93}>
              <Text style={styles.Text_82_93}>1997</Text>
            </View>
            <View style={styles.View_82_94}>
              <Text style={styles.Text_82_94}>November</Text>
            </View>
            <View style={styles.View_82_95}>
              <Text style={styles.Text_82_95}>22</Text>
            </View>
          </View>
          <View style={styles.View_82_96}>
            <View style={styles.View_82_97}>
              <Text style={styles.Text_82_97}>1996</Text>
            </View>
            <View style={styles.View_82_98}>
              <Text style={styles.Text_82_98}>October</Text>
            </View>
            <View style={styles.View_82_99}>
              <Text style={styles.Text_82_99}>21</Text>
            </View>
          </View>
          <View style={styles.View_82_100}>
            <View style={styles.View_82_101}>
              <Text style={styles.Text_82_101}>1995</Text>
            </View>
            <View style={styles.View_82_102}>
              <Text style={styles.Text_82_102}>September</Text>
            </View>
            <View style={styles.View_82_103}>
              <Text style={styles.Text_82_103}>20</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_82_104}>
          <View style={styles.View_82_105}>
            <View style={styles.View_82_138}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3253/8ead/0d526cc95310929d28b525f05bc74f5a"
                }}
                style={styles.ImageBackground_82_139}
              />
            </View>
            <View style={styles.View_82_135}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8a/5c3c/d921de61cd4ef38da62f868230425b56"
                }}
                style={styles.ImageBackground_82_136}
              />
            </View>
          </View>
          <View style={styles.View_82_108}>
            <Text style={styles.Text_82_108}>1994</Text>
          </View>
          <View style={styles.View_82_109}>
            <Text style={styles.Text_82_109}>August</Text>
          </View>
          <View style={styles.View_82_110}>
            <Text style={styles.Text_82_110}>19</Text>
          </View>
        </View>
        <View style={styles.View_82_111}>
          <View style={styles.View_82_112} />
          <View style={styles.View_82_113}>
            <View style={styles.View_82_114}>
              <Text style={styles.Text_82_114}>1993</Text>
            </View>
            <View style={styles.View_82_115}>
              <Text style={styles.Text_82_115}>July</Text>
            </View>
            <View style={styles.View_82_116}>
              <Text style={styles.Text_82_116}>18</Text>
            </View>
          </View>
          <View style={styles.View_82_117}>
            <View style={styles.View_82_118}>
              <Text style={styles.Text_82_118}>1992</Text>
            </View>
            <View style={styles.View_82_119}>
              <Text style={styles.Text_82_119}>June</Text>
            </View>
            <View style={styles.View_82_120}>
              <Text style={styles.Text_82_120}>17</Text>
            </View>
          </View>
          <View style={styles.View_82_121}>
            <View style={styles.View_82_122}>
              <Text style={styles.Text_82_122}>1991</Text>
            </View>
            <View style={styles.View_82_123}>
              <Text style={styles.Text_82_123}>May</Text>
            </View>
            <View style={styles.View_82_124}>
              <Text style={styles.Text_82_124}>16</Text>
            </View>
          </View>
          <View style={styles.View_82_125}>
            <View style={styles.View_82_126}>
              <Text style={styles.Text_82_126}>1990</Text>
            </View>
            <View style={styles.View_82_127}>
              <Text style={styles.Text_82_127}>April</Text>
            </View>
            <View style={styles.View_82_128}>
              <Text style={styles.Text_82_128}>15</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_82_71: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("67.75956284153006%")
  },
  View_82_72: {
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
  View_82_73: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.599999999999994%"),
    top: hp("2.185792349726782%"),
    justifyContent: "center"
  },
  Text_82_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_74: {
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
  Text_82_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_75: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("53.278688524590166%")
  },
  View_82_76: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_82_76: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_78: {
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
  Text_82_78: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_82: {
    width: wp("100%"),
    height: hp("29.508196721311474%"),
    top: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_82_83: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_82_84: {
    width: wp("100%"),
    height: hp("29.508196721311474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_82_141: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_82_142: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.371584699453564%")
  },
  View_82_86: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_87: {
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_82_88: {
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_89: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.533333333333346%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_89: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
    textTransform: "none"
  },
  View_82_90: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999995%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_90: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
    textTransform: "none"
  },
  View_82_91: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_91: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
    textTransform: "none"
  },
  View_82_92: {
    width: wp("56.8%"),
    height: hp("1.7759562841530054%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_93: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_93: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_94: {
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_94: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_95: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666927%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_95: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_96: {
    width: wp("60.266666666666666%"),
    height: hp("2.459016393442623%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_97: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_98: {
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_98: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_99: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_99: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_100: {
    width: wp("64.53333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_101: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.533333333333346%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_101: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_102: {
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.000000000000004%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_102: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_103: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_103: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_104: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.431693989071036%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_105: {
    width: wp("100%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_138: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_82_139: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_82_135: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_82_136: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579141%")
  },
  View_82_108: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_82_108: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.699999988079071,
    textTransform: "none"
  },
  View_82_109: {
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_82_109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.699999988079071,
    textTransform: "none"
  },
  View_82_110: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_82_110: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.699999988079071,
    textTransform: "none"
  },
  View_82_111: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_112: {
    width: wp("100%"),
    height: hp("12.431693989071038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_82_113: {
    width: wp("100%"),
    height: hp("12.431693989071038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_114: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.73333333333335%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_114: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_115: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000006%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_116: {
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_116: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.5782607793807983,
    textTransform: "none"
  },
  View_82_117: {
    width: wp("59.73333333333334%"),
    height: hp("2.459016393442623%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_118: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.400000000000006%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_118: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_119: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666668%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_119: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_120: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_120: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.4565216898918152,
    textTransform: "none"
  },
  View_82_121: {
    width: wp("56.266666666666666%"),
    height: hp("1.7759562841530054%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_122: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.60000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_122: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_123: {
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_123: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_124: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_124: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33478260040283203,
    textTransform: "none"
  },
  View_82_125: {
    width: wp("52.800000000000004%"),
    height: hp("1.2295081967213115%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_82_126: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.26666666666668%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_126: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
    textTransform: "none"
  },
  View_82_127: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.13333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_127: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
    textTransform: "none"
  },
  View_82_128: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_128: {
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.21304349601268768,
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
