import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

export const SubmitButton = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('80%')
            : props.Size === 'small'
                ? wp('40%')
                : wp('60%');
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.submitOnpress}
            style={[
                styles.MainButtonContainer,
                {
                    height: standardSize ? standardSize / 4 : wp('12%'),
                    width: standardSize ? standardSize : wp('12%'),
                },
                props.MainButtonContainer,
                ,
            ]}>
            <Text
                style={[
                    styles.ButtonText,
                    {
                        fontSize: standardSize ? standardSize / 14 : wp('7%'),
                    },
                    props.ButtonText,
                    ,
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

export const OtpSubmitButton = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('80%')
            : props.Size === 'small'
                ? wp('60%')
                : wp('50%');
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.submitOnpress}
            style={[
                styles.OtpButtonContainer,
                {
                    height: standardSize ? standardSize / 7.4 : wp('12%'),
                    width: standardSize ? standardSize : wp('72%'),
                },
                props.OtpButtonContainer,
                ,
            ]}>
            <Text
                style={[
                    styles.OtpButtonText,
                    {
                        fontSize: standardSize ? standardSize / 14 : wp('7%'),
                    },
                    props.ButtonText,
                    ,
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

export const SkipButton = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('80%')
            : props.Size === 'small'
                ? wp('60%')
                : wp('50%');
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[
                styles.MainButtonContainer,
                {
                    height: standardSize ? standardSize / 5.4 : wp('12%'),
                    width: standardSize ? standardSize : wp('72%'),
                },
            ]}>
            <Text
                style={[
                    styles.ButtonText,
                    {
                        fontSize: standardSize ? standardSize / 15 : wp('2%'),
                    },
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

export const UpdateButton = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('35%')
            : props.Size === 'small'
                ? wp('60%')
                : wp('50%');
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[
                styles.MainButtonContainer,
                {
                    height: wp('12%'),
                    width: wp('30%'),
                },
            ]}>
            <Text
                style={[
                    styles.ButtonText,
                    {
                        fontSize: wp('4%'),
                    },
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

export const CancelButton = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('35%')
            : props.Size === 'small'
                ? wp('60%')
                : wp('50%');
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[styles.MainButtonContainer, props.MainButtonContainer]}>
            <Text
                style={[
                    styles.ButtonText,
                    {
                        fontSize: wp('4%'),
                    },
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

export const HomeView = (props) => {
    let standardSize =
        props.Size === 'medium'
            ? wp('80%')
            : props.Size === 'small'
                ? wp('60%')
                : wp('50%');
    return (
        <TouchableOpacity
            onPress={props.submitOnpress}
            style={[
                styles.MainButtonContainer,
                {
                    height: wp('12%'),
                    width: wp('25%'),
                },
            ]}>
            <Text
                style={[
                    styles.ButtonText,
                    {
                        fontSize: standardSize ? standardSize / 15 : wp('2%'),
                    },
                ]}>
                {props.ButtonName ? props.ButtonName : 'SUBMIT'}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    MainButtonContainer: {
        height: wp('2%'),
        width: wp('5%'),
        backgroundColor: 'black',
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: wp('6%'),

    },
    OtpButtonContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: wp('6%')
    },
    OtpButtonText: {
        fontWeight: '700',
        color:'white'
    },

    ButtonText: {
        fontWeight: '900',
        color: 'white',
    },

});
