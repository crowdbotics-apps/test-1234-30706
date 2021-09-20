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
      <View style={styles.View_104_1}>
        <View style={styles.View_104_2}>
          <Text style={styles.Text_104_2}>Preview</Text>
        </View>
        <View style={styles.View_104_62}>
          <Text style={styles.Text_104_62}>Edit</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c2/8048/79c40f19919f7ef935095f951e0d8eb7"
          }}
          style={styles.ImageBackground_104_4}
        />
      </View>
      <View style={styles.View_104_40}>
        <View style={styles.View_104_41} />
        <View style={styles.View_104_42}>
          <Text style={styles.Text_104_42}>Guest total</Text>
        </View>
        <View style={styles.View_104_43}>
          <Text style={styles.Text_104_43}>40</Text>
        </View>
      </View>
      <View style={styles.View_104_198}>
        <View style={styles.View_104_63}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbf/0bdd/5416c4f2f3ff537755bdfaa84b6c7cc3"
            }}
            style={styles.ImageBackground_104_64}
          />
          <View style={styles.View_104_89}>
            <Text style={styles.Text_104_89}>#1</Text>
          </View>
          <View style={styles.View_104_65}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_66}
            />
            <View style={styles.View_104_67}>
              <Text style={styles.Text_104_67}>1</Text>
            </View>
          </View>
          <View style={styles.View_104_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_69}
            />
            <View style={styles.View_104_70}>
              <Text style={styles.Text_104_70}>3</Text>
            </View>
          </View>
          <View style={styles.View_104_71}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_72}
            />
            <View style={styles.View_104_73}>
              <Text style={styles.Text_104_73}>2</Text>
            </View>
          </View>
          <View style={styles.View_104_74}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_75}
            />
            <View style={styles.View_104_76}>
              <Text style={styles.Text_104_76}>7</Text>
            </View>
          </View>
          <View style={styles.View_104_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_78}
            />
            <View style={styles.View_104_79}>
              <Text style={styles.Text_104_79}>5</Text>
            </View>
          </View>
          <View style={styles.View_104_80}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_81}
            />
            <View style={styles.View_104_82}>
              <Text style={styles.Text_104_82}>6</Text>
            </View>
          </View>
          <View style={styles.View_104_83}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_84}
            />
            <View style={styles.View_104_85}>
              <Text style={styles.Text_104_85}>8</Text>
            </View>
          </View>
          <View style={styles.View_104_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_87}
            />
            <View style={styles.View_104_88}>
              <Text style={styles.Text_104_88}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_104_144}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbf/0bdd/5416c4f2f3ff537755bdfaa84b6c7cc3"
            }}
            style={styles.ImageBackground_104_145}
          />
          <View style={styles.View_104_146}>
            <Text style={styles.Text_104_146}>#4</Text>
          </View>
          <View style={styles.View_104_147}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_148}
            />
            <View style={styles.View_104_149}>
              <Text style={styles.Text_104_149}>1</Text>
            </View>
          </View>
          <View style={styles.View_104_150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_151}
            />
            <View style={styles.View_104_152}>
              <Text style={styles.Text_104_152}>3</Text>
            </View>
          </View>
          <View style={styles.View_104_153}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_154}
            />
            <View style={styles.View_104_155}>
              <Text style={styles.Text_104_155}>2</Text>
            </View>
          </View>
          <View style={styles.View_104_156}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_157}
            />
            <View style={styles.View_104_158}>
              <Text style={styles.Text_104_158}>7</Text>
            </View>
          </View>
          <View style={styles.View_104_159}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_160}
            />
            <View style={styles.View_104_161}>
              <Text style={styles.Text_104_161}>5</Text>
            </View>
          </View>
          <View style={styles.View_104_162}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_163}
            />
            <View style={styles.View_104_164}>
              <Text style={styles.Text_104_164}>6</Text>
            </View>
          </View>
          <View style={styles.View_104_165}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_166}
            />
            <View style={styles.View_104_167}>
              <Text style={styles.Text_104_167}>8</Text>
            </View>
          </View>
          <View style={styles.View_104_168}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_169}
            />
            <View style={styles.View_104_170}>
              <Text style={styles.Text_104_170}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_104_90}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbf/0bdd/5416c4f2f3ff537755bdfaa84b6c7cc3"
            }}
            style={styles.ImageBackground_104_91}
          />
          <View style={styles.View_104_92}>
            <Text style={styles.Text_104_92}>#2</Text>
          </View>
          <View style={styles.View_104_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_94}
            />
            <View style={styles.View_104_95}>
              <Text style={styles.Text_104_95}>1</Text>
            </View>
          </View>
          <View style={styles.View_104_96}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_97}
            />
            <View style={styles.View_104_98}>
              <Text style={styles.Text_104_98}>3</Text>
            </View>
          </View>
          <View style={styles.View_104_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_100}
            />
            <View style={styles.View_104_101}>
              <Text style={styles.Text_104_101}>2</Text>
            </View>
          </View>
          <View style={styles.View_104_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_103}
            />
            <View style={styles.View_104_104}>
              <Text style={styles.Text_104_104}>7</Text>
            </View>
          </View>
          <View style={styles.View_104_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_106}
            />
            <View style={styles.View_104_107}>
              <Text style={styles.Text_104_107}>5</Text>
            </View>
          </View>
          <View style={styles.View_104_108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_109}
            />
            <View style={styles.View_104_110}>
              <Text style={styles.Text_104_110}>6</Text>
            </View>
          </View>
          <View style={styles.View_104_111}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_112}
            />
            <View style={styles.View_104_113}>
              <Text style={styles.Text_104_113}>8</Text>
            </View>
          </View>
          <View style={styles.View_104_114}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_115}
            />
            <View style={styles.View_104_116}>
              <Text style={styles.Text_104_116}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_104_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbf/0bdd/5416c4f2f3ff537755bdfaa84b6c7cc3"
            }}
            style={styles.ImageBackground_104_172}
          />
          <View style={styles.View_104_173}>
            <Text style={styles.Text_104_173}>#5</Text>
          </View>
          <View style={styles.View_104_174}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_175}
            />
            <View style={styles.View_104_176}>
              <Text style={styles.Text_104_176}>1</Text>
            </View>
          </View>
          <View style={styles.View_104_177}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_178}
            />
            <View style={styles.View_104_179}>
              <Text style={styles.Text_104_179}>3</Text>
            </View>
          </View>
          <View style={styles.View_104_180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_181}
            />
            <View style={styles.View_104_182}>
              <Text style={styles.Text_104_182}>2</Text>
            </View>
          </View>
          <View style={styles.View_104_183}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_184}
            />
            <View style={styles.View_104_185}>
              <Text style={styles.Text_104_185}>7</Text>
            </View>
          </View>
          <View style={styles.View_104_186}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_187}
            />
            <View style={styles.View_104_188}>
              <Text style={styles.Text_104_188}>5</Text>
            </View>
          </View>
          <View style={styles.View_104_189}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_190}
            />
            <View style={styles.View_104_191}>
              <Text style={styles.Text_104_191}>6</Text>
            </View>
          </View>
          <View style={styles.View_104_192}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_193}
            />
            <View style={styles.View_104_194}>
              <Text style={styles.Text_104_194}>8</Text>
            </View>
          </View>
          <View style={styles.View_104_195}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_196}
            />
            <View style={styles.View_104_197}>
              <Text style={styles.Text_104_197}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_104_117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbf/0bdd/5416c4f2f3ff537755bdfaa84b6c7cc3"
            }}
            style={styles.ImageBackground_104_118}
          />
          <View style={styles.View_104_119}>
            <Text style={styles.Text_104_119}>#3</Text>
          </View>
          <View style={styles.View_104_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_121}
            />
            <View style={styles.View_104_122}>
              <Text style={styles.Text_104_122}>1</Text>
            </View>
          </View>
          <View style={styles.View_104_123}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_124}
            />
            <View style={styles.View_104_125}>
              <Text style={styles.Text_104_125}>3</Text>
            </View>
          </View>
          <View style={styles.View_104_126}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_127}
            />
            <View style={styles.View_104_128}>
              <Text style={styles.Text_104_128}>2</Text>
            </View>
          </View>
          <View style={styles.View_104_129}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_130}
            />
            <View style={styles.View_104_131}>
              <Text style={styles.Text_104_131}>7</Text>
            </View>
          </View>
          <View style={styles.View_104_132}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_133}
            />
            <View style={styles.View_104_134}>
              <Text style={styles.Text_104_134}>5</Text>
            </View>
          </View>
          <View style={styles.View_104_135}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_136}
            />
            <View style={styles.View_104_137}>
              <Text style={styles.Text_104_137}>6</Text>
            </View>
          </View>
          <View style={styles.View_104_138}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_139}
            />
            <View style={styles.View_104_140}>
              <Text style={styles.Text_104_140}>8</Text>
            </View>
          </View>
          <View style={styles.View_104_141}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfa/be16/841e26f38ba2bab368f83ce7193dc2bc"
              }}
              style={styles.ImageBackground_104_142}
            />
            <View style={styles.View_104_143}>
              <Text style={styles.Text_104_143}>4</Text>
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
  View_104_1: {
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
  View_104_2: {
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
  Text_104_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_62: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0.5464480874316937%"),
    justifyContent: "flex-start"
  },
  Text_104_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_4: {
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
  View_104_40: {
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
  View_104_41: {
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
  View_104_42: {
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
  Text_104_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_43: {
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
  Text_104_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_198: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.07103825136612%")
  },
  View_104_63: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_64: {
    width: wp("16.161616007486977%"),
    minWidth: wp("16.161616007486977%"),
    height: hp("8.279516397278165%"),
    minHeight: hp("8.279516397278165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252539062500001%"),
    top: hp("2.690849929559427%")
  },
  View_104_89: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666665%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_104_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_65: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666664%"),
    top: hp("0%")
  },
  ImageBackground_104_66: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_67: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_68: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.626236979166666%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_69: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_70: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_71: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.3939453125%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_72: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_73: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_74: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_75: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_76: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_77: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666664%"),
    top: hp("11.591326604123978%")
  },
  ImageBackground_104_78: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_79: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_80: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.232291666666667%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_81: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_82: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_83: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.232291666666667%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_84: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_85: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_86: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.3939453125%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_87: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_88: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_144: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("0%")
  },
  ImageBackground_104_145: {
    width: wp("16.161616007486977%"),
    minWidth: wp("16.161616007486977%"),
    height: hp("8.279516397278165%"),
    minHeight: hp("8.279516397278165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252539062500006%"),
    top: hp("2.690849929559427%")
  },
  View_104_146: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_104_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_147: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("0%")
  },
  ImageBackground_104_148: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_149: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_150: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.626236979166677%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_151: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_152: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_153: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_154: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_155: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_156: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_157: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_158: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_159: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("11.591326604123978%")
  },
  ImageBackground_104_160: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_161: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_162: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_163: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_164: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_165: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_166: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_167: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_168: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_169: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_170: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_90: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010929%")
  },
  ImageBackground_104_91: {
    width: wp("16.161616007486977%"),
    minWidth: wp("16.161616007486977%"),
    height: hp("8.279516397278165%"),
    minHeight: hp("8.279516397278165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252539062500001%"),
    top: hp("2.690849929559427%")
  },
  View_104_92: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666665%"),
    top: hp("5.737704918032797%"),
    justifyContent: "center"
  },
  Text_104_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_93: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666664%"),
    top: hp("0%")
  },
  ImageBackground_104_94: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_95: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_96: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.626236979166666%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_97: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_98: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_99: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.3939453125%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_100: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_101: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_102: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_103: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_104: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_105: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666664%"),
    top: hp("11.59132660412397%")
  },
  ImageBackground_104_106: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_107: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_108: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.232291666666667%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_109: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_110: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_111: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.232291666666667%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_112: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_113: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_114: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.3939453125%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_115: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_116: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_171: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("19.12568306010929%")
  },
  ImageBackground_104_172: {
    width: wp("16.161616007486977%"),
    minWidth: wp("16.161616007486977%"),
    height: hp("8.279516397278165%"),
    minHeight: hp("8.279516397278165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252539062500006%"),
    top: hp("2.690849929559427%")
  },
  View_104_173: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("5.737704918032797%"),
    justifyContent: "center"
  },
  Text_104_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_174: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("0%")
  },
  ImageBackground_104_175: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_176: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_177: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.626236979166677%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_178: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_179: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_180: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_181: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_182: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_183: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_184: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_185: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_186: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("11.59132660412397%")
  },
  ImageBackground_104_187: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_188: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_189: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_190: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_191: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_192: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_193: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_194: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_195: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("9.935422803534841%")
  },
  ImageBackground_104_196: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_197: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_117: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("9.83606557377049%")
  },
  ImageBackground_104_118: {
    width: wp("16.161616007486977%"),
    minWidth: wp("16.161616007486977%"),
    height: hp("8.279516397278165%"),
    minHeight: hp("8.279516397278165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.252539062500006%"),
    top: hp("2.690849929559427%")
  },
  View_104_119: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("5.737704918032797%"),
    justifyContent: "center"
  },
  Text_104_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_120: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("0%")
  },
  ImageBackground_104_121: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_122: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_123: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.62623697916667%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_124: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_125: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_126: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_127: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_128: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_129: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.795654963925891%")
  },
  ImageBackground_104_130: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_131: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_132: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313151041666671%"),
    top: hp("11.591326604123978%")
  },
  ImageBackground_104_133: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_134: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_135: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("9.935422803534834%")
  },
  ImageBackground_104_136: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_137: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_138: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2322916666666686%"),
    top: hp("1.6559038005891438%")
  },
  ImageBackground_104_139: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_140: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_141: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.39394531250001%"),
    top: hp("9.935422803534834%")
  },
  ImageBackground_104_142: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    height: hp("2.0698790993195413%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_143: {
    width: wp("4.040404001871744%"),
    minWidth: wp("4.040404001871744%"),
    minHeight: hp("2.0698790993195413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5.060606002807617,
    fontWeight: "400",
    textAlign: "center",
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
