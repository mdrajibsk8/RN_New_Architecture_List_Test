import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={{uri: `https://picsum.photos/seed/${item + 1}/100/100`}}
          />
          <View>
            <Text style={styles.name}>Howard Barton</Text>
            <Text style={styles.time}>2 hours ago</Text>
          </View>
        </View>

        <Text style={styles.title}>
          The Luxury Of Traveling With Yacht Charter Companies
        </Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.postImage}
            source={{uri: `https://picsum.photos/id/${item + 1}/400/150`}}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>❤️ 1125</Text>
          <Text style={styles.footerText}>💬 348</Text>
          <View style={styles.avatars}>
            <Image
              style={styles.avatar}
              source={{uri: `https://picsum.photos/seed/${item + 5}/100/100`}}
            />
            <Image
              style={styles.avatar}
              source={{
                uri: `https://picsum.photos/seed/${item + 3}/100/100`,
              }}
            />
            <Image
              style={styles.avatar}
              source={{
                uri: `https://picsum.photos/seed/${item + 9}/100/100`,
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <FlatList
        data={Array.from({length: 200}, (_, i) => i)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: 10,
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: 'gray',
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },
});

export default App;
