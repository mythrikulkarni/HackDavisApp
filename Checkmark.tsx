import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Frame88Props {
  text: string,
  state: 'Checked' | 'Unchecked',
  showCheck?: boolean,
  instance?: JSX.Element,
  testID?: string,
}
const styles = StyleSheet.createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 160,
    paddingTop: 9,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 9,
    alignItems: 'center',
    rowGap: 13,
    columnGap: 13,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  monday: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
}));

function Frame88(props: Frame88Props) {
  const _stateUnchecked = props.state === 'Unchecked';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _stateUnchecked && styles.rootStateUnchecked,
    ],
    component1: [
      styles.component1,
      _stateUnchecked && styles.component1StateUnchecked,
    ],
    monday: [
      styles.monday,
      _stateUnchecked && styles.mondayStateUnchecked,
    ],
  }), [styles, props.state]);

  const colors = useMemo(() => ({
    component1: [
      theme.colors.primaryForeground,
      _stateUnchecked && undefined,
    ].filter(Boolean).pop(),
  }), [props.state]);

  return (
    <View style={classes.root} testID={props.testID}>
      {props.instance}
      <Text style={classes.monday} testID="1:38">
        {props.text}
      </Text>
    </View>
  );
}



export default Frame88;