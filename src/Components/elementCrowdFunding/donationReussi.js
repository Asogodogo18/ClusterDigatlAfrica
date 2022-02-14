import * as React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";

import { DataTable, Divider } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const DonatioReusi = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={{ padding: 0 }}>
      <StatusBar hidden />
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: 1,
          marginBottom: 10,
        }}
      >
        Donation Reçu
      </Text>
      <Divider
        style={{
          backgroundColor: "black",
          width: "80%",
          alignSelf: "center",
          height: 2,
          opacity: 0.8,
        }}
      />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Utilisateurt</DataTable.Title>
          <DataTable.Title numeric>Montant</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Cheick abba</DataTable.Cell>
          <View style={{ alignContent: "center" }}>
            <DataTable.Cell numeric>100.000 FCFA</DataTable.Cell>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "red",
                borderRadius: 10,
              }}
            >
              non Paye
            </Text>
          </View>

          <DataTable.Cell numeric>02-05-2022</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Hamadoun</DataTable.Cell>
          <View style={{ justifyContent: "center" }}>
            <DataTable.Cell numeric>150.000 FCFA</DataTable.Cell>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "green",
                borderRadius: 5,
              }}
            >
              Paye
            </Text>
          </View>
          <DataTable.Cell numeric>03-05-2022</DataTable.Cell>
        </DataTable.Row>

        {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        /> */}
      </DataTable>
    </SafeAreaView>
  );
};

export default DonatioReusi;
