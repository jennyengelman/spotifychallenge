import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

export default class SpotifyPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.home}>
            <Text style={styles.texthome}>Home</Text>
          </View>
        <ScrollView>
          <View>
            <View style={{flex: 5, alignItems: 'center'}}>
              <Text style={styles.header}>Made For You</Text>
              <View style={{paddingBottom: 10, paddingTop: 5}}>
                <Text style={{color: 'white', fontSize: 15, paddingBottom: 7}}>Get better recommendations the more you listen.</Text>
              </View>
              <FlatList
                horizontal={true}
                data={[
                  {key: 'Discover Weekly', pic: require('./assets/discover.jpeg')},
                  {key: 'Kanye West', sub: 'Heartless', pic: require('./assets/kanye.jpg')},
                  {key: 'The Beatles', sub: 'Abbey Road', pic: require('./assets/beatles.jpg')},
                  {key: 'Justin Bieber', sub: 'Purpose', pic: require('./assets/justin.png')},
                ]}
                renderItem={({item}) => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
                        <Image source={item.pic} style={styles.image}/>
                      </View>
                      <View style={{flexDirection: 'column', paddingTop: 7, paddingLeft: 10}}>
                        <Text style={styles.artist}>{item.key}</Text>
                        <Text style={styles.album}>{item.sub}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
              <View style={{paddingBottom: 10}}>
                <Text style={styles.header}>Recently Played</Text>
              </View>
              <FlatList
                horizontal={true}
                data={[
                  {key: 'Bruce Springsteen', sub: 'Born in the USA', pic: require('./assets/bruce.jpg')},
                  {key: 'Ed Sheeran', sub: 'Divide', pic: require('./assets/ed.jpg')},
                  {key: 'Miley Cyrus', sub: 'Bangerz', pic: require('./assets/miley.jpg')},
                  {key: 'Post Malone', sub: 'Stoney', pic: require('./assets/post.jpg')},
                ]}
                renderItem={({item}) => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
                        <Image source={item.pic} style={styles.image}/>
                      </View>
                      <View style={{flexDirection: 'column', paddingTop: 7, paddingLeft: 10}}>
                        <Text style={styles.artist}>{item.key}</Text>
                        <Text style={styles.album}>{item.sub}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
              <Text style={styles.header}>Pop</Text>
              <FlatList
                horizontal={true}
                data={[
                  {key: "Today's Top Hits", sub: '18,990,291 FOLLOWERS', pic: require('./assets/hits.jpeg')},
                  {key: "Justin Timberlake", sub: 'The 20/20 Experience', pic: require('./assets/timberlake.jpg')},
                  {key: "Guilty Pleasures", sub: '401,406 FOLLOWERS', pic: require('./assets/guilty.jpeg')},
                ]}
                renderItem={({item}) => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
                        <Image source={item.pic} style={styles.image}/>
                      </View>
                      <View style={{flexDirection: 'column', paddingTop: 7, paddingLeft: 10, paddingBottom: 5}}>
                        <Text style={styles.artist}>{item.key}</Text>
                        <Text style={styles.album}>{item.sub}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View>
            <Image source={require('./assets/home.png')} style={styles.icon}/>
            <Text style={{fontSize: 10, color: 'white', paddingTop: 3}}>Home</Text>
          </View>
          <View>
            <Image source={require('./assets/browse.png')} style={styles.icon}/>
            <Text style={{fontSize: 10, color: 'white', paddingTop: 3}}>Browse</Text>
          </View>
          <View>
            <Image source={require('./assets/search.png')} style={styles.icon}/>
            <Text style={{fontSize: 10, color: 'white', paddingTop: 3}}>Search</Text>
          </View>
          <View>
            <Image source={require('./assets/radio.png')} style={styles.icon}/>
            <Text style={{fontSize: 10, color: 'white', paddingTop: 3}}>Radio</Text>
          </View>
          <View>
            <Image source={require('./assets/library.png')} style={styles.icon}/>
            <Text style={{fontSize: 10, color: 'white', paddingTop: 3}}>Your Library</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texthome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  home: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    width: '100%',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  artist: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 5,
  },
  album: {
    fontSize: 10,
    color: 'white',
    paddingTop: 2,
  },
  footer: {
    backgroundColor: '#111',
    flex: 1,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

AppRegistry.registerComponent('spotify-first', () => SpotifyPage);
