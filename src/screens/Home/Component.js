import { FlatList, RefreshControl, View } from "react-native";
import Header from "../../components/Header";
import { AnimatedFAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "../../components/Task";
import Container from "./Container";
import styles from "./Styles";
import Spinner from "../../components/Spinner";
import NoData from "../../components/NoData";

const Home = () => {
  const { showLoader, data, refreshing, onRefresh, onClickPlusIcon } =
    Container();

  const renderNoData = () => {
    return <NoData />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {showLoader ? (
        <Spinner />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Task task={item} />}
            keyExtractor={(item) => item?._id}
            contentContainerStyle={styles.listContentContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListEmptyComponent={() => renderNoData()}
          />
          <AnimatedFAB
            icon={"plus"}
            label={"Label"}
            extended={false}
            onPress={onClickPlusIcon}
            visible={true}
            animateFrom={"right"}
            iconMode={"static"}
            style={styles.fabContainer}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
