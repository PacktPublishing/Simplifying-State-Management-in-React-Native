import React from "react";
import { View, FlatList } from "react-native";
import { ConversationItem } from "./ConversationItem";

export const ListOfConvos = ({ navigation, conversationsList }) => {
  const renderItem = ({ item }) => {
    return <ConversationItem navigation={navigation} item={item} />;
  };
  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate='fast'
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
