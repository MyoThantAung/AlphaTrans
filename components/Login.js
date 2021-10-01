import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";

import { Dimensions } from "react-native";

import { verifiedUser } from "../storeUtil";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const [comname, setComname] = useState("");
  const [pass, setPass] = useState("");
  const [onloading, setOnloading] = useState(false);

  const loginHandlar = () => {
    setOnloading(true);
    const webhash = verifiedUser(comname, pass);
    alert("Hash: " + webhash);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/loginBack.jpg")}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <View
          style={
            (width < 1000) & (height < 1000)
              ? styles.modelBack
              : styles.largemodelBack
          }
        >
          <View style={styles.logoStyle}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={require("../assets/logo.png")}
            ></Image>
            <Text
              style={{
                fontSize: 20,
                paddingTop: 10,
                fontWeight: "bold",
              }}
            >
              AlphaTrans
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              LOGIN
            </Text>
            <View
              style={{
                backgroundColor: "#F5F5F5",
                borderRadius: 5,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <TextInput
                placeholder="Company Name"
                onChangeText={(text) => setComname(text)}
              ></TextInput>
            </View>

            <View
              style={{
                backgroundColor: "#F5F5F5",
                borderRadius: 5,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 10,
              }}
            >
              <TextInput
                placeholder="Password"
                onChangeText={(text) => setPass(text)}
                secureTextEntry
              ></TextInput>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 25,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    textDecorationLine: "underline",
                  }}
                >
                  Forget Password!
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Pressable
                  onPress={loginHandlar}
                  style={{
                    width: 70,
                    backgroundColor: "#368B85",
                    padding: 10,
                    borderRadius: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {onloading ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: 10,
                      }}
                    >
                      <ActivityIndicator size="small" color="#fff" />
                    </View>
                  ) : (
                    <Text
                      style={{
                        alignSelf: "center",
                        color: "white",
                      }}
                    >
                      Login
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>

            <View
              style={{
                alignItems: "center",
                paddingTop: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                ©ProfessionalGenius
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modelBack: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
    alignSelf: "center",
  },
  logoStyle: {
    alignItems: "center",
    padding: 20,
  },
  largemodelBack: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
    alignSelf: "flex-end",
    marginEnd: "10%",
  },
});
