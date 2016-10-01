(ns figwheel.connect (:require [personal-space-site.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/personal-space-site.core.on-js-reload (apply js/personal-space-site.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'personal-space-site.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

