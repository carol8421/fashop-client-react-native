import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import PropTypes from "prop-types";
import { OrderButton } from '../../components'

export default class EvaluateCard extends Component {
    static propTypes = {
        goodsInfo: PropTypes.object,
    };
    static defaultProps = {
        goodsInfo: null,
    };

    onGoods() {
        if (this.props.onGoods) {
            this.props.onGoods();
        }
    }

    onDetail() {
        if (this.props.onDetail) {
            this.props.onDetail();
        }
    }

    onAdd() {
        if (this.props.onAdd) {
            this.props.onAdd();
        }
    }

    onAdditional() {
        if (this.props.onAdditional) {
            this.props.onAdditional();
        }
    }

    render() {
        const { goodsInfo } = this.props

        return <View style={styles.evaluateGoodsCard}>
            <View>
                <View style={styles.item}>
                    <View style={styles.content}>
                        <View style={styles.image} onPress={this.onGoods()}>
                            <Image source={{
                                uri: goodsInfo.goods_img
                            }} resizeMode={'contain'} />
                        </View>
                        <View style={styles.body}>
                            <Text onPress={this.onGoods()} style={styles.text}>{goodsInfo.goods_title}</Text>
                            <View style={styles.buttonArea}>
                                {goodsInfo.evaluate_state > 0 ? <OrderButton
                                    text="查看评价"
                                    size="small"
                                    onClick={() => {
                                        this.onDetail()
                                    }} /> : null}
                                {goodsInfo.evaluate_state === 0 ?
                                    <OrderButton
                                        text="去评价"
                                        size="small"
                                        type={'danger'}
                                        onClick={() => {
                                            this.onAdd()
                                        }}
                                    /> : null}
                                {goodsInfo.evaluate_state === 1 ? <OrderButton
                                    text="追加评价"
                                    size="small"
                                    type={'danger'}
                                    onClick={() => {
                                        this.onAdditional()
                                    }}
                                /> : null}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    }
}
const styles = StyleSheet.create({
    evaluateGoodsCard: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "#F8F8F8",
        backgroundColor: "#FFFFFF",
    },
    item: {
        padding: 15
    },
    content: {
        justifyContent: "flex-start"
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    body: {},
    text: {
        fontSize: 14,
        color: "#333",
        lineHeight: 18,

    },
    footer: {
        justifyContent: "flex-end"
    },
    buttonArea: {
        position: "absolute",
        bottom: 15,
        right: 15
    }
})