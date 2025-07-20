import CustomButton from "@/components/CustomButton";
import seed from "@/lib/seed";
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [laoding, setLoading] = useState(false);
  return (
    <SafeAreaView>
      <Text>Search</Text>
      <CustomButton
        title="Seed db"
        onPress={async () => {
          try {
            setLoading(true);
            await seed();
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        isLoading={laoding}
      />
    </SafeAreaView>
  );
};

export default Search;
