import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
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

  // Reference to the ScrollView containing the carousel slides. Used to programmatically scroll to a specific card when navigating through the cardBox.
  const carouselTrack = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to keep track of the currently visible card index in the carousel. This is updated whenever the user navigates through the cards using the arrows or by scrolling manually.
  const showSlide = (index: number) => {
    const newIndex = ((index % cards.length) + cards.length) % cards.length;
    setCurrentIndex(newIndex);
    if (carouselTrack.current) {
      carouselTrack.current.scrollTo({ x: newIndex * 115, animated: true });
    }
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
          {Array.from({ length: cards.length }).map((_, index) => (
            <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
          ))}
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
