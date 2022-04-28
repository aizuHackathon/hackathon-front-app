import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './ProcessButtonStyles';

export const ProcessButton: React.FC<{
  onClick: () => void;
  content: string;
  style?: object;
}> = ({ onClick, content, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[buttonStyles.processButton, style]}
      onPress={onClick}
    >
      <Text style={buttonStyles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
};
