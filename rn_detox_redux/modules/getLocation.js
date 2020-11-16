import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const getLocation = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    return location
  } else {
    throw new Error('Permission to access location was denied')
  }
}

export default getLocation