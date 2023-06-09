import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../img/logo.png";

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 120,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    },
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
      },
      tableRow: {
        margin: 'auto',
        flexDirection: 'row'
      },
      tableColHeader: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#ffc0cb',
        padding: 5
      },
      tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        textAlign: 'center',
        padding: 5
      }
  
  
});


const Invoice = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <Image style={styles.logo} src={logo} />
    <View style={styles.invoiceNoContainer}>
        <Text style={styles.label}>Invoice No:</Text>
        <Text style={styles.invoiceDate}>{order._id}</Text>
    </View >
    <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{order.createdAt}</Text>
    </View >
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Customer Details:</Text>
        <Text>Name: {order.user.name}</Text>
        <Text>Address: {order.user.address}</Text>
        <Text>Phone: {order.user.phone}</Text>
        <Text>Email: {order.user.email}</Text>
    </View>
    <br/>
    <br/>
    <Text style={styles.billTo}>Order Details:</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Item Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Quantity</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Price</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Total</Text>
              </View>
            </View>
            {order.orderItems.map((item) => (
              <View style={styles.tableRow} key={item._id}>
                <View style={styles.tableCol}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>{item.quantity}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>${item.price}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>${item.quantity * item.price}</Text>
                </View>
              </View>
            ))}
          </View>
          <br/>
          <br/>
    <Text>Total Price: ${order.totalPrice}</Text>

   
    </Page>
  </Document>
);

export default Invoice;