import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopHeader from "../../components/common/Header";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ListItem from "../../components/common/ListItem";
import MenuItem from "../../components/common/MenuItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import {
  CustomerCount,
  RedemptionRate,
  AverageCashback,
  CashbackExpiring,
} from "../Cards"; // Adjust paths as needed

const { width } = Dimensions.get("window");
const scale = width / 320;

const scaledSize = (size) => Math.ceil(size * scale);

const CustomerDashboard = ({ isBusiness }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.transactionList}>
        <TopHeader title={"Dashboard"} />

        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>Rs. 6,700</Text>
        </View>

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.transferButton}>
            <MaterialCommunityIcons
              name="bank-transfer"
              size={scaledSize(24)}
              color="black"
            />
            <Text style={styles.transferText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.receiveButton}>
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={scaledSize(24)}
              color="#FFB800"
            />
            <Text style={styles.receiveText}>Receive</Text>
          </TouchableOpacity>
        </View>

        {!isBusiness ? (
          <>
            <View style={styles.recentHeader}>
              <Text style={styles.recentText}></Text>
              <TouchableOpacity>
                <Text style={styles.seeMoreText}>See More</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.transactionList}>
              <ListItem title="STYLO" price="2,700" />
              <ListItem title="Broadway" price="2,200" variant="dark" />
              <ListItem title="Sweet Creme" price="700" />
              <ListItem title="Bundu Khan" price="100" variant="dark" />
            </ScrollView>
          </>
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <CustomerCount count={56} change={7} />
              <RedemptionRate rate={25} change={-2} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <AverageCashback amount={216} change={10} />
              <CashbackExpiring amount={2756} change={60} />
            </View>
            {/* </ScrollView> */}
          </>
        )}
        <View style={styles.menuContainer}>
          {!isBusiness ? (
            <>
              <MenuItem
                onPress={() => navigation.navigate("RequestCashback")}
                topText="Request"
                bottomText="CashBack"
              />
              <MenuItem
                onPress={() => navigation.navigate("ReferEarn")}
                topText="Refer"
                bottomText="& Earn"
              />
              <MenuItem
                onPress={() => console.log("test")}
                topText="Games"
                bottomText="& Rewards"
              />
              <MenuItem
                onPress={() => navigation.navigate("Offers")}
                topText="Deals"
                bottomText="& Discounts"
              />
            </>
          ) : (
            <>
            <MenuItem
                onPress={() => navigation.navigate("AddCustomer")}
                topText="Add"
                bottomText="Customer"
              />
              <MenuItem
                onPress={() => navigation.navigate("AddCustomer")}
                topText="Customer"
                bottomText="List"
              />
              <MenuItem
                onPress={() =>navigation.navigate("Offers")}
                topText="Offers"
                bottomText=" & Promotions"
              />
              <MenuItem
                onPress={() => navigation.navigate("Invites")}
                topText="Request"
                bottomText="& Invites"
              />


            </>
          )}
        </View>
        <View
          style={[
            styles.menuContainer,
            { alignSelf: "center", marginTop: scaledSize(10) },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("QRscan")}
            style={{
              backgroundColor: "#fdba28",
              padding: scaledSize(20),
              borderRadius: 100,
            }}
          >
            <MaterialIcons
              name="qr-code-scanner"
              size={scaledSize(44)}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: scaledSize(10),
  },
  balanceSection: {
    marginBottom: scaledSize(20),
  },
  balanceLabel: {
    fontSize: scaledSize(14),
    color: "#666666",
  },
  balanceAmount: {
    fontSize: scaledSize(32),
    fontWeight: "bold",
    marginTop: scaledSize(5),
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scaledSize(20),
  },
  transferButton: {
    backgroundColor: "#FFB800",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: scaledSize(15),
    borderRadius: 10,
    width: "48%",
  },
  receiveButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: scaledSize(15),
    borderRadius: 10,
    width: "48%",
  },
  transferText: {
    marginLeft: scaledSize(10),
    fontWeight: "600",
    fontSize: scaledSize(16),
  },
  receiveText: {
    marginLeft: scaledSize(10),
    fontWeight: "600",
    fontSize: scaledSize(16),
    color: "#FFB800",
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaledSize(10),
  },
  recentText: {
    fontSize: scaledSize(16),
    fontWeight: "600",
  },
  seeMoreText: {
    color: "#FFB800",
    fontSize: scaledSize(14),
  },
  transactionList: {
    flex: 1,
    marginBottom: scaledSize(15),
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: scaledSize(15),
  },
});

export default CustomerDashboard;
