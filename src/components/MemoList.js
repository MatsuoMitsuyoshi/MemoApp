import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList,
} from 'react-native';

const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

class MemoList extends React.Component {
  renderMemo({ item }) {
    // console.log(item);
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
          <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTile: {
    fontSize: 18,
    marginBottom: 8,
  },
  memoDate: {
    marginTop: 4,
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
