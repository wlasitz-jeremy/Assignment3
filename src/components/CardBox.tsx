import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

//props for the CardBox component
type Props = {
  // The array of card objects to display in the carousel. Each card has an ID and an image.
  cards: { id: string | number; image: ImageSourcePropType }[];
  game: "riftbound" | "lorcana" | "pokemon" | "yugioh" | "magic";
  // The text to display above the image carousel.
  CardBoxText: string;
};

/* Renders an image carousel within a styled card box. 
Includes left/right navigation arrows and pagination dots.*/
export default function CardBox({ cards, game, CardBoxText }: Props) {
  // Initialize the router for navigation to the CardInfo page when a card is pressed. Game and card ID are passed as parameters.
  const router = useRouter();

  
    // Animations for the pagination dots when they are pressed in and out. The dot scales up and its opacity changes on press.
    const dotAnimation = useRef(new Animated.Value(1)).current;
    const opacityAnimation = useRef(new Animated.Value(1)).current;
    // Handlers for when a pagination dot is pressed in and out. These trigger the animations defined above.
    const handleDotIn = () => {
      // Trigger the animation for pressing in the dot.
      Animated.spring(dotAnimation, {
        toValue: 1.2,
        useNativeDriver: true,
        friction: 3,
      }).start();
      // Trigger the animation for changing the opacity of the dot.
      Animated.timing(opacityAnimation, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };
    // Handler for when a pagination dot is released. This triggers the animations to revert the dot to its original state.
    const handleDotOut = () => {
      // Trigger the animation for releasing the dot.
      Animated.spring(dotAnimation, {
        toValue: 1,
        useNativeDriver: true,
        friction: 3,
      }).start();
      // Trigger the animation for changing the opacity of the dot back to its original state.
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };


  // Calculate the total width of a card including its margin. This is used to determine the scroll position when navigating through the carousel.
  const cardWidth = styles.cardImage.width + styles.cardImage.marginRight;
  // Reference to the ScrollView containing the carousel slides. Used to programmatically scroll to a specific card when navigating through the cardBox.
  const carouselTrack = useRef<ScrollView>(null);
  // Reference to the ScrollView containing the carousel slides. Used to programmatically scroll to a specific card when navigating through the cardBox.
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to keep track of the currently visible card index in the carousel. This is updated whenever the user navigates through the cards using the arrows or by scrolling manually.
  const showSlide = (index: number) => {
    // Calculate the new index, ensuring it wraps around correctly if it goes out of bounds.
    const newIndex = ((index % cards.length) + cards.length) % cards.length;
    // Update the currentIndex state and scroll the carousel to the new index.
    setCurrentIndex(newIndex);
    // Scroll the carousel to the new index if the reference to the ScrollView is available.
    if (carouselTrack.current) {
      // Scroll the carousel to the calculated position based on the new index.
      carouselTrack.current.scrollTo({ x: newIndex * cardWidth, animated: true });
    }
  };


  // Handler for the scroll event of the carousel. Updates the currentIndex state based on the horizontal scroll position.
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Extract the horizontal scroll offset from the event. This represents how far the user has scrolled horizontally within the carousel.
    const offsetX = event.nativeEvent.contentOffset.x;
    // Extract the visible width of the carousel and the total content width to determine if the user has scrolled to the end.
    const visableWidth = event.nativeEvent.layoutMeasurement.width;
    // Determine if the user has scrolled to the end of the carousel.
    const contentWidth = event.nativeEvent.contentSize.width;
    // Calculate the new index based on whether the user is at the end or not.
    const isAtEnd = offsetX + visableWidth >= contentWidth - 5;
    // Ensure the new index is within the valid range of card indices.
    const newIndex = isAtEnd ? cards.length - 1 : Math.round(offsetX / cardWidth);
    // Update the currentIndex state with the new index, ensuring it is not less than 0.
    setCurrentIndex(Math.max(0, newIndex));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{CardBoxText}</Text>
      <View style={styles.imageCarousel}>
        <Pressable id="prev-arrow" onPress={() => showSlide(currentIndex - 1)}>
          <Ionicons name="chevron-back" style={styles.arrow}/>
        </Pressable>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          id="carousel-track"
          ref={carouselTrack}
          style={styles.scrollView}
          onMomentumScrollEnd={handleScroll}
          scrollEventThrottle={16}
        >
          {/* Mapping through the cards array to render each card as a pressable image. When pressed, navigates to the CardInfo page with the game and card ID as parameters. */}
          <View id="carousel-slide" style={styles.imageRow}>
            {cards.map((card) => (
              <Pressable
                key={card.id}
                onPress={() =>
                  router.push({
                    pathname: "/CardInfo",
                    params: { game, cardId: String(card.id) },
                  })
                }
              >
                <Image source={card.image} style={styles.cardImage} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <Pressable id="next-arrow" onPress={() => showSlide(currentIndex + 1)}>
          <Ionicons name="chevron-forward" style={styles.arrow}/>
        </Pressable>
        <View id="carousel-dots" style={styles.dots}>
          {Array.from({ length: Math.min(28, cards.length), }).map((_, index) => { 
            const maxDots = Math.min(28, cards.length);
            const startIndex = Math.max(0, Math.min(currentIndex - Math.floor(maxDots / 2), cards.length - maxDots)); 
            const dotIndex = startIndex + index; 
          return (
            <View key={index} style={[styles.dot, currentIndex === dotIndex && styles.activeDot]} />
          )})}
        </View>
      </View>
    </View>
  );
}

// Styles for the CardBox component
const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: "#000",
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  //images
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 7.5,
    marginTop: 15,
    marginRight: 15,
    resizeMode: "cover",
  },

  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  innerShadow: {
    position: "absolute",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.12,
  },
  //carousel
  imageCarousel: {
    width: 350,
    height: 150,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingRight: 8,
    paddingBottom: 25,
    backgroundColor: "#e4e2f4",
    borderWidth: 1,
    borderColor: "#aaa5c8",
    borderRadius: 10,
    marginBottom: 30,

    // IOS shadows
    shadowColor: "#30275c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,

    // Android Shadows
    elevation: 5,
  },

  // nav arrows
  arrow: {
    fontSize: 48,
    color: "grey",
    zIndex: 1,
  },

  // dots
  dots: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#777777",
  },
  // Text styling
  text: {
    color: "#424B57",
    alignSelf: "flex-start",
  },
});
