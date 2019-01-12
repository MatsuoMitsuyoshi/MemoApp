import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTile}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/1/12</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTile}>買い出し</Text>
          <Text style={styles.memoDate}>2019/1/12</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTile}>11月のTODOリスト</Text>
          <Text style={styles.memoDate}>2019/1/12</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTile}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/1/12</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTile}>レシピ カルボナーラ</Text>
          <Text style={styles.memoDate}>2019/1/12</Text>
        </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTile: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
