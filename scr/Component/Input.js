import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { lightblue } from '../Helper/Colors'


const Input = (props) => {
    const { style,
        placeholder,
        secureTextEntry,
        keyboardType,
        value,
        onChange,
        editable,
        importantForAutofill,
        inlineImageLeft,
        inlineImagePadding,
        keyboardAppearance,
        maxLength,
        multiline,
        placeholderTextColor,
        textAlign,
        textContentType,
        passwordRules,
        text,
        Markstyle
    } = props
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input, style}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChange}
                editable={editable}
                importantForAutofill={importantForAutofill}
                inlineImageLeft={inlineImageLeft}
                inlineImagePadding={inlineImagePadding}
                keyboardAppearance={keyboardAppearance}
                maxLength={maxLength}
                multiline={multiline}
                placeholderTextColor={placeholderTextColor}
                textAlign={textAlign}
                textContentType={textContentType}
                passwordRules={passwordRules}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightblue,
        borderRadius: 10
    },
    input: {
        margin: 15,
        padding: 20
    },
})
export default Input