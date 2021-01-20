We can't just map over things like we would in React for the web when working with React Native. 
So for that we need to use a `FlatList`

The `FlatList` is imported from `react-native`:

```javascript
import { FlatList } from 'react-native'
```

The `FlatList` is constructed like following: 
```javascript
<FlatList
  data={articles} // must be an array stored in a variable. It could be an array statically stored in the component or dynamically fetched from a backend.
  renderItem={({item}) => <Text> {item.title} </Text>} // NOTE: 'item' is hardcoded and can not be set to a chosen variable like in a map in javascript. The item in the argument of the anonymous function is passed as an object in the argument, that is important. Then you can return any component you like, in this case a Text. 
  keyExtractor={(item) => item.id} // you don't have to parse this into a string but to note that you can not access item without a callback. The key extractor is needed due to every React list needs to have a unique key on every item. 
/>
```

If we instead want to pass another component as the `renderItem`, it could look something like this: 

```javascript
<FlatList
  data={articles}
  renderItem={({item}) => <ArticleItem article={item}/>} // now we are passing the item into a prop called article, which puts us in a situation that we are more familiar with.
  keyExtractor={(item) => item.id} 
/>
```

```javascript
// ArticleItem.jsx

import React from 'react'
import { Image, View, Text } from 'react-native'

const ArticleItem = ({ article }) => {
  return (
    <>
      <Image source={{uri: article.image}} />
      <View>
        <Text>{article.title}</Text>
        <Text>{article.lead}</Text> // lets say we only return the image, title and lead for each article in the list
      </View>
    </>
  )
}
```