import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Animated,
} from 'react-native';

export default function App() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleLongPress = () => {
    setShowText(true);
  };

  const handlePress = () => {
    setShowImage(true);
  };
  const animatedValue = new Animated.Value(-100);

  useEffect(() => {
    if (showText) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 400,
          duration: 5000,
          useNativeDriver: false,
        }),
      ).start();
    } 
  }, [showText]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Soma</Text>
        </View>
      </TouchableOpacity>
      {showText && (
        <Animated.View style={[styles.textView, {left: animatedValue}]}>
          <Text style={styles.longPressText}>I LOVE YOU FOREVER!</Text>
        </Animated.View>
      )}
      {showImage && (
        <Image source={require('../Images/pngwing.png')} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontSize: 20,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  longPressText: {
    marginTop: 20,
    fontSize: 28,
    color: 'red',
  },
});
