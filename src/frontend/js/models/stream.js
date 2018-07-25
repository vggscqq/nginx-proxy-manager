'use strict';

const Backbone = require('backbone');

const model = Backbone.Model.extend({
    idAttribute: 'id',

    defaults: function () {
        return {
            id:              0,
            created_on:      null,
            modified_on:     null,
            owner:           null,
            incoming_port:   null,
            forward_ip:      null,
            forwarding_port: null,
            tcp_forwarding:  true,
            udp_forwarding:  false,
            meta:            {}
        };
    }
});

module.exports = {
    Model:      model,
    Collection: Backbone.Collection.extend({
        model: model
    })
};
