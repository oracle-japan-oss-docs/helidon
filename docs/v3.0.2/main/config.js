
function createConfig() {
    return {
        home: "about/introduction",
        release: "3.0.2",
        releases: [
            "3.0.2"
        ],
        pathColors: {
            "*": "blue-grey"
        },
        theme: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
        },
        navTitle: 'Helidon',
        navIcon: null,
        navLogo: 'images/helidon_logo_dark.svg'
    };
}
function createRoutes(){
    return [
        {
            path: '/about/introduction',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: 'Helidon',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-introduction', 'about/introduction', {})
        },
        {
            path: '/about/prerequisites',
            meta: {
                h1: '開始',
                title: '開始',
                h1Prefix: null,
                description: 'Helidon pre-requisites and getting started',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-prerequisites', 'about/prerequisites', {})
        },
        {
            path: '/about/cli',
            meta: {
                h1: 'Helidon CLI',
                title: 'Helidon CLI',
                h1Prefix: null,
                description: 'Helidon CLI',
                keywords: 'helidon cli',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-cli', 'about/cli', {})
        },
        {
            path: '/se/introduction',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'SE',
                description: 'Helidon SE introduction',
                keywords: 'helidon, java, SE, microservices, Netty',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-introduction', 'se/introduction', {})
        },
        {
            path: '/se/guides/overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'SE',
                description: 'Helidon SE Guides',
                keywords: 'helidon, java, microservices, microprofile, guides',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-overview', 'se/guides/overview', {})
        },
        {
            path: '/se/guides/quickstart',
            meta: {
                h1: 'Helidon SEクイックスタート',
                title: 'Helidon SEクイックスタート',
                h1Prefix: 'SE',
                description: 'Helidon SE Quickstart Guide',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-quickstart', 'se/guides/quickstart', {})
        },
        {
            path: '/se/guides/config',
            meta: {
                h1: 'Helidon SE構成ガイド',
                title: 'Helidon SE構成ガイド',
                h1Prefix: 'SE',
                description: 'Helidon configuration',
                keywords: 'helidon, configuration, microprofile, guide, SE',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-config', 'se/guides/config', {})
        },
        {
            path: '/se/guides/health',
            meta: {
                h1: 'Helidon SEヘルス・チェック・ガイド',
                title: 'Helidon SEヘルス・チェック・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon health checks',
                keywords: 'helidon, health check, health check, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-health', 'se/guides/health', {})
        },
        {
            path: '/se/guides/metrics',
            meta: {
                h1: 'Helidon SEメトリクス・ガイド',
                title: 'Helidon SEメトリクス・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-metrics', 'se/guides/metrics', {})
        },
        {
            path: '/se/guides/security-oidc',
            meta: {
                h1: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド',
                title: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon OIDC Security Provider',
                keywords: 'helidon, security, guide, oidc, provider',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-security-oidc', 'se/guides/security-oidc', {})
        },
        {
            path: '/se/guides/tracing',
            meta: {
                h1: 'Helidon SEトレース・ガイド',
                title: 'Helidon SEトレース・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon tracing',
                keywords: 'helidon, tracing, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-tracing', 'se/guides/tracing', {})
        },
        {
            path: '/se/guides/migration',
            meta: {
                h1: 'Helidon SE 2.xアップグレード・ガイド',
                title: 'Helidon SE 2.xアップグレード・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-migration', 'se/guides/migration', {})
        },
        {
            path: '/se/guides/migration_3x',
            meta: {
                h1: 'Helidon SE 3.xアップグレード・ガイド',
                title: 'Helidon SE 3.xアップグレード・ガイド',
                h1Prefix: null,
                description: 'Helidon SE 3.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-migration_3x', 'se/guides/migration_3x', {})
        },
        {
            path: '/se/guides/maven-build',
            meta: {
                h1: 'Mavenガイド',
                title: 'Mavenガイド',
                h1Prefix: 'SE',
                description: 'Helidon Maven Guide',
                keywords: 'helidon, guide, maven, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-maven-build', 'se/guides/maven-build', {})
        },
        {
            path: '/se/guides/gradle-build',
            meta: {
                h1: 'Gradleガイド',
                title: 'Gradleガイド',
                h1Prefix: 'SE',
                description: 'Helidon Gradle Guide',
                keywords: 'helidon, guide, gradle, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-gradle-build', 'se/guides/gradle-build', {})
        },
        {
            path: '/se/guides/graalnative',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon Native Image',
                keywords: 'helidon, guide, graalvm, native-image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-graalnative', 'se/guides/graalnative', {})
        },
        {
            path: '/se/guides/jlink-image',
            meta: {
                h1: '`jlink`を使用したカスタム・ランタイム・イメージ',
                title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon Custom Runtime Images',
                keywords: 'helidon, guide, jlink, image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-jlink-image', 'se/guides/jlink-image', {})
        },
        {
            path: '/se/guides/webclient',
            meta: {
                h1: 'Helidon SE WebClientガイド',
                title: 'Helidon SE WebClientガイド',
                h1Prefix: 'SE',
                description: 'Helidon WebClient',
                keywords: 'helidon, WebClient, web, client',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-webclient', 'se/guides/webclient', {})
        },
        {
            path: '/se/guides/dbclient',
            meta: {
                h1: 'Helidon SE DBクライアント・ガイド',
                title: 'Helidon SE DBクライアント・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon db-client',
                keywords: 'helidon, db, client',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-dbclient', 'se/guides/dbclient', {})
        },
        {
            path: '/se/guides/performance-tuning',
            meta: {
                h1: 'パフォーマンス・チューニング',
                title: 'パフォーマンス・チューニング',
                h1Prefix: 'SE',
                description: 'Helidon SE Performance Tuning',
                keywords: 'helidon, se, performance, tuning',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-performance-tuning', 'se/guides/performance-tuning', {})
        },
        {
            path: '/se/config/introduction',
            meta: {
                h1: '構成コンポーネント',
                title: '構成コンポーネント',
                h1Prefix: 'SE',
                description: 'Helidon config introduction',
                keywords: 'helidon, se, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-introduction', 'se/config/introduction', {})
        },
        {
            path: '/se/config/hierarchical-features',
            meta: {
                h1: '階層機能',
                title: '階層機能',
                h1Prefix: 'SE',
                description: 'Helidon hierarchical features',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-hierarchical-features', 'se/config/hierarchical-features', {})
        },
        {
            path: '/se/config/property-mapping',
            meta: {
                h1: 'プロパティ・マッピング',
                title: 'プロパティ・マッピング',
                h1Prefix: 'SE',
                description: 'Helidon config property mapping',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-property-mapping', 'se/config/property-mapping', {})
        },
        {
            path: '/se/config/supported-formats',
            meta: {
                h1: 'サポートされているその他の形式およびソース',
                title: 'サポートされているその他の形式およびソース',
                h1Prefix: 'SE',
                description: 'Helidon config supported formats and sources',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-supported-formats', 'se/config/supported-formats', {})
        },
        {
            path: '/se/config/config-profiles',
            meta: {
                h1: '構成プロファイル',
                title: '構成プロファイル',
                h1Prefix: 'SE',
                description: 'Helidon config profiles',
                keywords: 'helidon, config, profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-config-profiles', 'se/config/config-profiles', {})
        },
        {
            path: '/se/config/mutability-support',
            meta: {
                h1: '可変性のサポート',
                title: '可変性のサポート',
                h1Prefix: 'SE',
                description: 'Helidon mutability support',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-mutability-support', 'se/config/mutability-support', {})
        },
        {
            path: '/se/config/advanced-configuration',
            meta: {
                h1: '拡張構成に関するトピック',
                title: '拡張構成に関するトピック',
                h1Prefix: 'SE',
                description: 'Helidon advanced configuration',
                keywords: 'helidon, config, meta',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-advanced-configuration', 'se/config/advanced-configuration', {})
        },
        {
            path: '/se/config/extensions',
            meta: {
                h1: '拡張',
                title: '拡張',
                h1Prefix: 'SE',
                description: 'Helidon config extensions',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-extensions', 'se/config/extensions', {})
        },
        {
            path: '/se/cors',
            meta: {
                h1: 'Helidon SEのCORS',
                title: 'Helidon SEのCORS',
                h1Prefix: 'SE',
                description: 'Helidon SE CORS Support',
                keywords: 'helidon, java, cors, se, configuration, services',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-cors', 'se/cors', {})
        },
        {
            path: '/se/dbclient',
            meta: {
                h1: 'Helidon DBクライアントについて',
                title: 'Helidon DBクライアントについて',
                h1Prefix: 'SE',
                description: 'Helidon DB Client',
                keywords: 'helidon, se, database, dbclient',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-dbclient', 'se/dbclient', {})
        },
        {
            path: '/se/grpc/server',
            meta: {
                h1: 'gRPCサーバー',
                title: 'gRPCサーバー',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Server',
                keywords: 'helidon, grpc, java, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-server', 'se/grpc/server', {})
        },
        {
            path: '/se/grpc/client',
            meta: {
                h1: 'gRPCクライアント',
                title: 'gRPCクライアント',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Client',
                keywords: 'helidon, grpc, java, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-client', 'se/grpc/client', {})
        },
        {
            path: '/se/graphql',
            meta: {
                h1: 'GraphQLサーバーの概要',
                title: 'GraphQLサーバーの概要',
                h1Prefix: 'SE',
                description: 'Helidon GraphQL Server Introduction',
                keywords: 'helidon, graphql, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-graphql', 'se/graphql', {})
        },
        {
            path: '/se/health',
            meta: {
                h1: 'ヘルス・チェック',
                title: 'ヘルス・チェック',
                h1Prefix: 'SE',
                description: 'Helidon health checks',
                keywords: 'helidon, health checks, health, check, readiness, liveness, probes, kubernetes',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-health', 'se/health', {})
        },
        {
            path: '/se/metrics/metrics',
            meta: {
                h1: 'Helidon SEのメトリクス',
                title: 'Helidon SEのメトリクス',
                h1Prefix: 'SE',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-metrics', 'se/metrics/metrics', {})
        },
        {
            path: '/se/metrics/micrometer',
            meta: {
                h1: 'マイクロメーター・メトリクス',
                title: 'マイクロメーター・メトリクス',
                h1Prefix: 'SE',
                description: 'Helidon Micrometer integration',
                keywords: 'micrometer, helidon, metrics, integration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-micrometer', 'se/metrics/micrometer', {})
        },
        {
            path: '/se/metrics/prometheus-exemplar-support',
            meta: {
                h1: 'Exemplarsのメトリクス・サポート',
                title: 'Exemplarsのメトリクス・サポート',
                h1Prefix: 'SE',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, exemplar, prometheus, OpenMetrics',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-prometheus-exemplar-support', 'se/metrics/prometheus-exemplar-support', {})
        },
        {
            path: '/se/metrics/metrics-capable-components',
            meta: {
                h1: 'メトリクス対応モジュール',
                title: 'メトリクス対応モジュール',
                h1Prefix: 'SE',
                description: 'Helidon SE metrics-capable components',
                keywords: 'helidon, metrics, metrics-capable, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-metrics-capable-components', 'se/metrics/metrics-capable-components', {})
        },
        {
            path: '/se/openapi',
            meta: {
                h1: 'OpenAPI',
                title: 'OpenAPI',
                h1Prefix: 'SE',
                description: 'Helidon SE OpenAPI Support',
                keywords: 'helidon, se, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-openapi', 'se/openapi', {})
        },
        {
            path: '/se/integrations/oci',
            meta: {
                h1: 'Oracle Cloud Infrastructure統合',
                title: 'Oracle Cloud Infrastructure統合',
                h1Prefix: 'SE',
                description: 'Helidon OCI Integration',
                keywords: 'oci',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-integrations-oci', 'se/integrations/oci', {})
        },
        {
            path: '/se/integrations/hcv',
            meta: {
                h1: 'HashiCorp Vault',
                title: 'HashiCorp Vault',
                h1Prefix: 'SE',
                description: 'Helidon HashiCorp Vault integration',
                keywords: 'vault, hashicorp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-integrations-hcv', 'se/integrations/hcv', {})
        },
        {
            path: '/se/integrations/neo4j',
            meta: {
                h1: 'Neo4j',
                title: 'Neo4j',
                h1Prefix: 'SE',
                description: 'Neo4j integration',
                keywords: 'neo4j',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-integrations-neo4j', 'se/integrations/neo4j', {})
        },
        {
            path: '/se/reactivestreams/engine',
            meta: {
                h1: 'Helidonリアクティブ・エンジン',
                title: 'Helidonリアクティブ・エンジン',
                h1Prefix: 'SE',
                description: 'Dependency-less reactive operators',
                keywords: 'helidon, reactive, streams, multi, single',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivestreams-engine', 'se/reactivestreams/engine', {})
        },
        {
            path: '/se/reactivestreams/rsoperators',
            meta: {
                h1: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                title: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                h1Prefix: 'SE',
                description: 'MicroProfile Reactive Streams Operators support in Helidon SE',
                keywords: 'helidon, se, microprofile, reactivestreams',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivestreams-rsoperators', 'se/reactivestreams/rsoperators', {})
        },
        {
            path: '/se/reactive-messaging',
            meta: {
                h1: 'リアクティブ・メッセージング',
                title: 'リアクティブ・メッセージング',
                h1Prefix: null,
                description: 'Reactive Messaging support in Helidon SE',
                keywords: 'helidon, se, messaging',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactive-messaging', 'se/reactive-messaging', {})
        },
        {
            path: '/se/webserver',
            meta: {
                h1: 'WebServer概要',
                title: 'WebServer概要',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer Introduction',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver, tls',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver', 'se/webserver', {})
        },
        {
            path: '/se/security/introduction',
            meta: {
                h1: 'セキュリティの概要',
                title: 'セキュリティの概要',
                h1Prefix: 'SE',
                description: 'Helidon Security introduction',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-introduction', 'se/security/introduction', {})
        },
        {
            path: '/se/security/providers',
            meta: {
                h1: 'セキュリティ・プロバイダ',
                title: 'セキュリティ・プロバイダ',
                h1Prefix: 'SE',
                description: 'Helidon Security providers',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-providers', 'se/security/providers', {})
        },
        {
            path: '/se/security/containers-integration',
            meta: {
                h1: 'クラウド・セキュリティ・コンテナ統合',
                title: 'クラウド・セキュリティ・コンテナ統合',
                h1Prefix: 'SE',
                description: 'Helidon Security containers integration',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-containers-integration', 'se/security/containers-integration', {})
        },
        {
            path: '/se/security/tools',
            meta: {
                h1: 'セキュリティ・ツール',
                title: 'セキュリティ・ツール',
                h1Prefix: 'SE',
                description: 'Helidon Security Tools',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-tools', 'se/security/tools', {})
        },
        {
            path: '/se/security/extensibility',
            meta: {
                h1: 'セキュリティの強化',
                title: 'セキュリティの強化',
                h1Prefix: 'SE',
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-extensibility', 'se/security/extensibility', {})
        },
        {
            path: '/se/security/jep-290',
            meta: {
                h1: 'JEP-290',
                title: 'JEP-290',
                h1Prefix: 'SE',
                description: 'Helidon Security Java Serialization (JEP-290)',
                keywords: 'helidon, security, serialization, java, JEP-290',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-jep-290', 'se/security/jep-290', {})
        },
        {
            path: '/se/scheduling',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: 'Scheduling in Helidon SE',
                keywords: 'helidon, se, scheduling',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-scheduling', 'se/scheduling', {})
        },
        {
            path: '/se/tracing',
            meta: {
                h1: 'トレース',
                title: 'トレース',
                h1Prefix: 'SE',
                description: 'Helidon SE Tracing Support',
                keywords: 'helidon, tracing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-tracing', 'se/tracing', {})
        },
        {
            path: '/se/webclient',
            meta: {
                h1: 'WebClient概要',
                title: 'WebClient概要',
                h1Prefix: 'SE',
                description: 'Helidon WebClient',
                keywords: 'helidon, se, rest, httpclient, webclient, reactive',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webclient', 'se/webclient', {})
        },
        {
            path: '/se/websocket',
            meta: {
                h1: 'WebSocket概要',
                title: 'WebSocket概要',
                h1Prefix: 'SE',
                description: 'Helidon WebSocket Introduction',
                keywords: 'helidon, webserver, websocket, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-websocket', 'se/websocket', {})
        },
        {
            path: '/se/aot',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon AOT using GraalVM native-image',
                keywords: 'helidon, aot, native, native-image, image, executable, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-aot', 'se/aot', {})
        },
        {
            path: '/se/fault-tolerance',
            meta: {
                h1: 'Helidon SEでのフォルト・トレランス',
                title: 'Helidon SEでのフォルト・トレランス',
                h1Prefix: 'SE',
                description: 'Fault Tolerance in Helidon SE',
                keywords: 'helidon, java, fault, tolerance, fault tolerance, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-fault-tolerance', 'se/fault-tolerance', {})
        },
        {
            path: '/mp/introduction',
            meta: {
                h1: 'Helidon MP',
                title: 'Helidon MP',
                h1Prefix: 'MP',
                description: 'about Helidon MP',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-introduction', 'mp/introduction', {})
        },
        {
            path: '/mp/guides/overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'MP',
                description: 'Helidon MP Guides',
                keywords: 'helidon, java, microservices, microprofile, guides',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-overview', 'mp/guides/overview', {})
        },
        {
            path: '/mp/guides/quickstart',
            meta: {
                h1: 'Helidon MPクイックスタート',
                title: 'Helidon MPクイックスタート',
                h1Prefix: 'MP',
                description: 'Helidon MP Quickstart guide',
                keywords: 'helidon, MicroProfile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-quickstart', 'mp/guides/quickstart', {})
        },
        {
            path: '/mp/guides/config',
            meta: {
                h1: 'Helidon MP構成ガイド',
                title: 'Helidon MP構成ガイド',
                h1Prefix: 'MP',
                description: 'Helidon configuration',
                keywords: 'helidon, configuration, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-config', 'mp/guides/config', {})
        },
        {
            path: '/mp/guides/health',
            meta: {
                h1: 'Helidon MPヘルス・チェック・ガイド',
                title: 'Helidon MPヘルス・チェック・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon health checks',
                keywords: 'helidon, health checks, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-health', 'mp/guides/health', {})
        },
        {
            path: '/mp/guides/metrics',
            meta: {
                h1: 'Helidon MPメトリクス・ガイド',
                title: 'Helidon MPメトリクス・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-metrics', 'mp/guides/metrics', {})
        },
        {
            path: '/mp/guides/security-oidc',
            meta: {
                h1: 'Helidon MP OIDCセキュリティ・プロバイダ',
                title: 'Helidon MP OIDCセキュリティ・プロバイダ',
                h1Prefix: 'MP',
                description: 'Helidon OIDC Security Provider guide',
                keywords: 'helidon, security, guide, oidc, provider',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-security-oidc', 'mp/guides/security-oidc', {})
        },
        {
            path: '/mp/guides/tracing',
            meta: {
                h1: 'Helidon MPトレース・ガイド',
                title: 'Helidon MPトレース・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon tracing',
                keywords: 'helidon, tracing, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-tracing', 'mp/guides/tracing', {})
        },
        {
            path: '/mp/guides/mp-tutorial',
            meta: {
                h1: 'Helidon MPチュートリアル',
                title: 'Helidon MPチュートリアル',
                h1Prefix: 'MP',
                description: 'Helidon MP Tutorial',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-mp-tutorial', 'mp/guides/mp-tutorial', {})
        },
        {
            path: '/mp/guides/migration',
            meta: {
                h1: 'Helidon MP 2.xアップグレード・ガイド',
                title: 'Helidon MP 2.xアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-migration', 'mp/guides/migration', {})
        },
        {
            path: '/mp/guides/migration_3x',
            meta: {
                h1: 'Helidon MP 3.xアップグレード・ガイド',
                title: 'Helidon MP 3.xアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP 3.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities, 3.x',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-migration_3x', 'mp/guides/migration_3x', {})
        },
        {
            path: '/mp/guides/maven-build',
            meta: {
                h1: 'Mavenガイド',
                title: 'Mavenガイド',
                h1Prefix: 'MP',
                description: 'Helidon Maven Guide',
                keywords: 'helidon, guide, maven, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-maven-build', 'mp/guides/maven-build', {})
        },
        {
            path: '/mp/guides/gradle-build',
            meta: {
                h1: 'Gradleガイド',
                title: 'Gradleガイド',
                h1Prefix: 'MP',
                description: 'Helidon Gradle Guide',
                keywords: 'helidon, guide, gradle, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-gradle-build', 'mp/guides/gradle-build', {})
        },
        {
            path: '/mp/guides/graalnative',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon Native Image',
                keywords: 'helidon, guide, graalvm, native-image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-graalnative', 'mp/guides/graalnative', {})
        },
        {
            path: '/mp/guides/jlink-image',
            meta: {
                h1: '`jlink`を使用したカスタム・ランタイム・イメージ',
                title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon Custom Runtime Images',
                keywords: 'helidon, guide, jlink, image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-jlink-image', 'mp/guides/jlink-image', {})
        },
        {
            path: '/mp/guides/se-services',
            meta: {
                h1: 'Helidon SEサービスの再利用',
                title: 'Helidon SEサービスの再利用',
                h1Prefix: 'MP',
                description: 'Helidon Reactive Routing',
                keywords: 'helidon, guide, routing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-se-services', 'mp/guides/se-services', {})
        },
        {
            path: '/mp/guides/testing-junit5',
            meta: {
                h1: 'JUnit 5ガイドによるHelidon MPテスト',
                title: 'JUnit 5ガイドによるHelidon MPテスト',
                h1Prefix: 'MP',
                description: 'Helidon testing with JUnit 5',
                keywords: 'helidon, testing, microprofile, guide, JUnit',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-testing-junit5', 'mp/guides/testing-junit5', {})
        },
        {
            path: '/mp/guides/jbatch',
            meta: {
                h1: 'JBatchガイド付きHelidon',
                title: 'JBatchガイド付きHelidon',
                h1Prefix: 'MP',
                description: 'Helidon',
                keywords: 'helidon, microprofile, guide, Jakarta Batch Project, Jakarta Batch',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-jbatch', 'mp/guides/jbatch', {})
        },
        {
            path: '/mp/guides/performance-tuning',
            meta: {
                h1: 'パフォーマンス・チューニング',
                title: 'パフォーマンス・チューニング',
                h1Prefix: 'MP',
                description: 'Helidon MP Performance Tuning',
                keywords: 'helidon, microprofile, micro-profile, performance, tuning',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-performance-tuning', 'mp/guides/performance-tuning', {})
        },
        {
            path: '/mp/beanvalidation',
            meta: {
                h1: 'Beanバリデーションの概要',
                title: 'Beanバリデーションの概要',
                h1Prefix: 'MP',
                description: 'Bean Validation',
                keywords: 'helidon, webserver, bean validation, validation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-beanvalidation', 'mp/beanvalidation', {})
        },
        {
            path: '/mp/config/introduction',
            meta: {
                h1: 'MicroProfile構成',
                title: 'MicroProfile構成',
                h1Prefix: 'MP',
                description: 'MicroProfile Config support in Helidon MP',
                keywords: 'helidon, mp, microprofile, config, encryption, reference',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-config-introduction', 'mp/config/introduction', {})
        },
        {
            path: '/mp/config/advanced-configuration',
            meta: {
                h1: 'マイクロプロファイル構成ソース',
                title: 'マイクロプロファイル構成ソース',
                h1Prefix: 'MP',
                description: 'MicroProfile Config Sources',
                keywords: 'helidon, mp, ordinal, mpconfig, yamlmpconfig',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-config-advanced-configuration', 'mp/config/advanced-configuration', {})
        },
        {
            path: '/mp/cors/cors',
            meta: {
                h1: 'Helidon MPのCORS',
                title: 'Helidon MPのCORS',
                h1Prefix: 'MP',
                description: 'Helidon MP CORS Support',
                keywords: 'helidon, java, cors, mp, configuration, services',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-cors-cors', 'mp/cors/cors', {})
        },
        {
            path: '/mp/fault-tolerance',
            meta: {
                h1: 'フォルト・トレランスの概要',
                title: 'フォルト・トレランスの概要',
                h1Prefix: 'MP',
                description: 'Fault Tolerance',
                keywords: 'helidon, webserver, fault, tolerance, faulttolerance, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-fault-tolerance', 'mp/fault-tolerance', {})
        },
        {
            path: '/mp/grpc/server',
            meta: {
                h1: 'gRPC MicroProfileサーバー',
                title: 'gRPC MicroProfileサーバー',
                h1Prefix: 'MP',
                description: 'Helidon gRPC MicroProfile Server-Side Services',
                keywords: 'helidon, java, grpc, microprofile, micro-profile, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-grpc-server', 'mp/grpc/server', {})
        },
        {
            path: '/mp/grpc/client',
            meta: {
                h1: 'gRPC MicroProfileクライアント',
                title: 'gRPC MicroProfileクライアント',
                h1Prefix: 'MP',
                description: 'Building Helidon gRPC MicroProfile Clients',
                keywords: 'helidon, java, grpc, microprofile, micro-profile, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-grpc-client', 'mp/grpc/client', {})
        },
        {
            path: '/mp/graphql',
            meta: {
                h1: 'MicroProfile GraphQL',
                title: 'MicroProfile GraphQL',
                h1Prefix: 'MP',
                description: 'Helidon GraphQL MicroProfile',
                keywords: 'helidon, graphql, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-graphql', 'mp/graphql', {})
        },
        {
            path: '/mp/health',
            meta: {
                h1: 'MicroProfileヘルス',
                title: 'MicroProfileヘルス',
                h1Prefix: 'MP',
                description: 'MicroProfile Health support in Helidon MP',
                keywords: 'helidon, mp, microprofile, health',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-health', 'mp/health', {})
        },
        {
            path: '/mp/jaxrs/application-configuration',
            meta: {
                h1: 'アプリケーションの構成',
                title: 'アプリケーションの構成',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile application configuration',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-application-configuration', 'mp/jaxrs/application-configuration', {})
        },
        {
            path: '/mp/jaxrs/jaxrs-applications',
            meta: {
                h1: 'JAX-RSアプリケーション',
                title: 'JAX-RSアプリケーション',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile JAX-RS applications',
                keywords: 'helidon, microprofile, micro-profile, jax-rs, applications, jakarta, rest',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-jaxrs-applications', 'mp/jaxrs/jaxrs-applications', {})
        },
        {
            path: '/mp/jaxrs/jaxrs-client',
            meta: {
                h1: 'Jakarta REST (JAX- RS)クライアント',
                title: 'Jakarta REST (JAX- RS)クライアント',
                h1Prefix: 'MP',
                description: 'Jakarta REST (JAX-RS) Client',
                keywords: 'helidon, rest, jax-rs, client, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-jaxrs-client', 'mp/jaxrs/jaxrs-client', {})
        },
        {
            path: '/mp/persistence',
            meta: {
                h1: '永続性',
                title: '永続性',
                h1Prefix: 'MP',
                description: 'Persistence-related support in Helidon MP',
                keywords: 'datasource, helidon, jpa, jta, microprofile, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-persistence', 'mp/persistence', {})
        },
        {
            path: '/mp/jwt',
            meta: {
                h1: 'JWT認証',
                title: 'JWT認証',
                h1Prefix: 'MP',
                description: 'MicroProfile JWT Auth support in Helidon MP',
                keywords: 'helidon, mp, microprofile, security, jwt',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jwt', 'mp/jwt', {})
        },
        {
            path: '/mp/lra',
            meta: {
                h1: 'LRA',
                title: 'LRA',
                h1Prefix: null,
                description: 'Long Running Actions',
                keywords: 'helidon, mp, lra',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-lra', 'mp/lra', {})
        },
        {
            path: '/mp/metrics/metrics',
            meta: {
                h1: 'Helidon MPのメトリック',
                title: 'Helidon MPのメトリック',
                h1Prefix: 'MP',
                description: 'Helidon MP Metrics Support',
                keywords: 'helidon, java, metrics, mp, configuration, services',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-metrics-metrics', 'mp/metrics/metrics', {})
        },
        {
            path: '/mp/metrics/micrometer',
            meta: {
                h1: 'マイクロメーターのサポート',
                title: 'マイクロメーターのサポート',
                h1Prefix: 'MP',
                description: 'Helidon Micrometer integration',
                keywords: 'micrometer, helidon, metrics, integration, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-metrics-micrometer', 'mp/metrics/micrometer', {})
        },
        {
            path: '/mp/metrics/prometheus-exemplar-support',
            meta: {
                h1: 'OpenMetrics Exemplarサポート',
                title: 'OpenMetrics Exemplarサポート',
                h1Prefix: 'MP',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, exemplar, prometheus, OpenMetrics, tracing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-metrics-prometheus-exemplar-support', 'mp/metrics/prometheus-exemplar-support', {})
        },
        {
            path: '/mp/metrics/metrics-capable-components',
            meta: {
                h1: 'メトリクス対応モジュール',
                title: 'メトリクス対応モジュール',
                h1Prefix: 'SE',
                description: 'Helidon MP metrics-capable modules',
                keywords: 'helidon, metrics, metrics-capable, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-metrics-metrics-capable-components', 'mp/metrics/metrics-capable-components', {})
        },
        {
            path: '/mp/openapi',
            meta: {
                h1: 'OpenAPI',
                title: 'OpenAPI',
                h1Prefix: 'MP',
                description: 'Helidon MP OpenAPI Support',
                keywords: 'helidon, mp, microprofile, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-openapi', 'mp/openapi', {})
        },
        {
            path: '/mp/integrations/oci',
            meta: {
                h1: 'Oracle Cloud Infrastructure統合',
                title: 'Oracle Cloud Infrastructure統合',
                h1Prefix: 'MP',
                description: 'Helidon OCI Integration',
                keywords: 'oci, cdi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-integrations-oci', 'mp/integrations/oci', {})
        },
        {
            path: '/mp/integrations/hcv',
            meta: {
                h1: 'HashiCorp Vault',
                title: 'HashiCorp Vault',
                h1Prefix: 'MP',
                description: 'Helidon HashiCorp Vault integration',
                keywords: 'vault, hashicorp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-integrations-hcv', 'mp/integrations/hcv', {})
        },
        {
            path: '/mp/integrations/jedis',
            meta: {
                h1: 'Jedis',
                title: 'Jedis',
                h1Prefix: 'MP',
                description: 'Helidon Jedis integration',
                keywords: 'jedis, redis',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-integrations-jedis', 'mp/integrations/jedis', {})
        },
        {
            path: '/mp/integrations/neo4j',
            meta: {
                h1: 'Neo4j',
                title: 'Neo4j',
                h1Prefix: 'MP',
                description: 'Neo4j integration',
                keywords: 'neo4j',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-integrations-neo4j', 'mp/integrations/neo4j', {})
        },
        {
            path: '/mp/reactivestreams/engine',
            meta: {
                h1: 'Helidonリアクティブ・エンジン',
                title: 'Helidonリアクティブ・エンジン',
                h1Prefix: 'MP',
                description: 'Dependency-less reactive operators',
                keywords: 'helidon, reactive, streams, multi, single',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivestreams-engine', 'mp/reactivestreams/engine', {})
        },
        {
            path: '/mp/reactivestreams/rsoperators',
            meta: {
                h1: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                title: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                h1Prefix: 'MP',
                description: 'MicroProfile Reactive Streams Operators support in Helidon MP',
                keywords: 'helidon, mp, microprofile, reactive, operators',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivestreams-rsoperators', 'mp/reactivestreams/rsoperators', {})
        },
        {
            path: '/mp/reactivemessaging/introduction',
            meta: {
                h1: 'リアクティブ・メッセージMP',
                title: 'リアクティブ・メッセージMP',
                h1Prefix: 'MP',
                description: 'MicroProfile Reactive Messaging support in Helidon MP',
                keywords: 'helidon, mp, microprofile, messaging',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-introduction', 'mp/reactivemessaging/introduction', {})
        },
        {
            path: '/mp/reactivemessaging/kafka',
            meta: {
                h1: 'Kafkaコネクタ',
                title: 'Kafkaコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for Kafka in Helidon MP',
                keywords: 'helidon, mp, messaging, kafka',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-kafka', 'mp/reactivemessaging/kafka', {})
        },
        {
            path: '/mp/reactivemessaging/jms',
            meta: {
                h1: 'JMSコネクタ',
                title: 'JMSコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for JMS in Helidon MP',
                keywords: 'helidon, mp, messaging, jms',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-jms', 'mp/reactivemessaging/jms', {})
        },
        {
            path: '/mp/reactivemessaging/aq',
            meta: {
                h1: 'Oracle AQコネクタ',
                title: 'Oracle AQコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for Oracle AQ in Helidon MP',
                keywords: 'helidon, mp, messaging, jms, aq',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-aq', 'mp/reactivemessaging/aq', {})
        },
        {
            path: '/mp/reactivemessaging/mock',
            meta: {
                h1: 'モック・コネクタ',
                title: 'モック・コネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging Mock connector for testing',
                keywords: 'helidon, mp, messaging, test, mock',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-mock', 'mp/reactivemessaging/mock', {})
        },
        {
            path: '/mp/restclient',
            meta: {
                h1: 'Restクライアント',
                title: 'Restクライアント',
                h1Prefix: 'MP',
                description: 'Helidon MP Rest Client',
                keywords: 'helidon, rest, client, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-restclient', 'mp/restclient', {})
        },
        {
            path: '/mp/security/security',
            meta: {
                h1: 'セキュリティの追加',
                title: 'セキュリティの追加',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile security',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-security', 'mp/security/security', {})
        },
        {
            path: '/mp/security/providers',
            meta: {
                h1: 'セキュリティ・プロバイダ',
                title: 'セキュリティ・プロバイダ',
                h1Prefix: 'MP',
                description: 'Helidon Security providers',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-providers', 'mp/security/providers', {})
        },
        {
            path: '/mp/security/configuration-secrets',
            meta: {
                h1: '構成シークレット',
                title: '構成シークレット',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile configuration secrets',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-configuration-secrets', 'mp/security/configuration-secrets', {})
        },
        {
            path: '/mp/security/jep-290',
            meta: {
                h1: 'JEP-290',
                title: 'JEP-290',
                h1Prefix: 'MP',
                description: 'Helidon Security Java Serialization (JEP-290)',
                keywords: 'helidon, security, serialization, java, JEP-290',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-jep-290', 'mp/security/jep-290', {})
        },
        {
            path: '/mp/scheduling',
            meta: {
                h1: 'スケジュール',
                title: 'スケジュール',
                h1Prefix: 'MP',
                description: 'Scheduling in Helidon MP',
                keywords: 'helidon, mp, scheduling',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-scheduling', 'mp/scheduling', {})
        },
        {
            path: '/mp/tracing',
            meta: {
                h1: 'トレース',
                title: 'トレース',
                h1Prefix: 'MP',
                description: 'Helidon MP Tracing Support',
                keywords: 'helidon, tracing, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-tracing', 'mp/tracing', {})
        },
        {
            path: '/mp/websocket',
            meta: {
                h1: 'WebSocket概要',
                title: 'WebSocket概要',
                h1Prefix: 'MP',
                description: 'Helidon WebSocket Introduction',
                keywords: 'helidon, webserver, websocket, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-websocket', 'mp/websocket', {})
        },
        {
            path: '/mp/server',
            meta: {
                h1: 'MicroProfileサーバー',
                title: 'MicroProfileサーバー',
                h1Prefix: 'MP',
                description: 'MicroProfile Server support in Helidon MP',
                keywords: 'helidon, mp, microprofile, server',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-server', 'mp/server', {})
        },
        {
            path: '/mp/aot',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon AOT using GraalVM native-image',
                keywords: 'helidon, aot, native, native-image, image, executable, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-aot', 'mp/aot', {})
        },
        {
            path: '/mp/testing',
            meta: {
                h1: 'JUnit5でのテスト',
                title: 'JUnit5でのテスト',
                h1Prefix: null,
                description: 'Helidon Testing with JUnit5',
                keywords: 'helidon, mp, test, testing, junit',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-testing', 'mp/testing', {})
        },
        {
            path: '/mp/testing-ng',
            meta: {
                h1: 'TestNGを使用したテスト',
                title: 'TestNGを使用したテスト',
                h1Prefix: null,
                description: 'Helidon Testing with TestNG',
                keywords: 'helidon, mp, test, testing, testng',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-testing-ng', 'mp/testing-ng', {})
        },
        {
            path: '/config/config_reference',
            meta: {
                h1: '構成リファレンス',
                title: '構成リファレンス',
                h1Prefix: null,
                description: 'Configuration Reference',
                keywords: 'helidon, config, reference',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('config-config_reference', 'config/config_reference', {})
        },
        {
            path: '/community',
            meta: {
                h1: 'コミュニティ',
                title: 'コミュニティ',
                h1Prefix: null,
                description: 'Helidon community',
                keywords: 'helidon, community, slack, github, twitter, blog',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('community', 'community', {})
        },
        {
            path: '/config/io_helidon_security_SecurityTime',
            meta: {
                h1: 'SecurityTime (security)構成',
                title: 'SecurityTime (security)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.SecurityTime',
                keywords: 'helidon, config, io.helidon.security.SecurityTime',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_SecurityTime', 'config/io_helidon_security_SecurityTime', {})
        },
        {
            path: '/guides/oke',
            meta: {
                h1: 'OKEへのデプロイ',
                title: 'OKEへのデプロイ',
                h1Prefix: null,
                description: 'Helidon Oracle Container Engine for Kubernetes (OKE) Guide',
                keywords: 'helidon, guide, oracle, kubernetes',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('guides-oke', 'guides/oke', {})
        },
        {
            path: '/config/io_helidon_common_configurable_ThreadPoolSupplier',
            meta: {
                h1: 'ThreadPoolSupplier (common.configurable)構成',
                title: 'ThreadPoolSupplier (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.ThreadPoolSupplier',
                keywords: 'helidon, config, io.helidon.common.configurable.ThreadPoolSupplier',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_ThreadPoolSupplier', 'config/io_helidon_common_configurable_ThreadPoolSupplier', {})
        },
        {
            path: '/config/io_helidon_common_configurable_ScheduledThreadPoolSupplier',
            meta: {
                h1: 'ScheduledThreadPoolSupplier (common.configurable)構成',
                title: 'ScheduledThreadPoolSupplier (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.ScheduledThreadPoolSupplier',
                keywords: 'helidon, config, io.helidon.common.configurable.ScheduledThreadPoolSupplier',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_ScheduledThreadPoolSupplier', 'config/io_helidon_common_configurable_ScheduledThreadPoolSupplier', {})
        },
        {
            path: '/config/io_helidon_openapi_OpenAPISupport',
            meta: {
                h1: 'OpenAPISupport (openapi)構成',
                title: 'OpenAPISupport (openapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.openapi.OpenAPISupport',
                keywords: 'helidon, config, io.helidon.openapi.OpenAPISupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_openapi_OpenAPISupport', 'config/io_helidon_openapi_OpenAPISupport', {})
        },
        {
            path: '/about/windows',
            meta: {
                h1: 'WindowsのHelidon',
                title: 'WindowsのHelidon',
                h1Prefix: null,
                description: 'Helidon on Windows',
                keywords: 'windows',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-windows', 'about/windows', {})
        },
        {
            path: '/config/io_helidon_metrics_serviceapi_MetricsSupport',
            meta: {
                h1: 'MetricsSupport (metrics.serviceapi)構成',
                title: 'MetricsSupport (metrics.serviceapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.serviceapi.MetricsSupport',
                keywords: 'helidon, config, io.helidon.metrics.serviceapi.MetricsSupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_serviceapi_MetricsSupport', 'config/io_helidon_metrics_serviceapi_MetricsSupport', {})
        },
        {
            path: '/config/io_helidon_servicecommon_rest_HelidonRestServiceSupport',
            meta: {
                h1: 'HelidonRestServiceSupport (servicecommon.rest)構成',
                title: 'HelidonRestServiceSupport (servicecommon.rest)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.servicecommon.rest.HelidonRestServiceSupport',
                keywords: 'helidon, config, io.helidon.servicecommon.rest.HelidonRestServiceSupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_servicecommon_rest_HelidonRestServiceSupport', 'config/io_helidon_servicecommon_rest_HelidonRestServiceSupport', {})
        },
        {
            path: '/config/io_helidon_metrics_api_RegistrySettings',
            meta: {
                h1: 'RegistrySettings (metrics.api)構成',
                title: 'RegistrySettings (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.RegistrySettings',
                keywords: 'helidon, config, io.helidon.metrics.api.RegistrySettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_RegistrySettings', 'config/io_helidon_metrics_api_RegistrySettings', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Retry',
            meta: {
                h1: 'Retry (faulttolerance)構成',
                title: 'Retry (faulttolerance)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Retry',
                keywords: 'helidon, config, io.helidon.faulttolerance.Retry',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Retry', 'config/io_helidon_faulttolerance_Retry', {})
        },
        {
            path: '/config/io_helidon_security_Security',
            meta: {
                h1: 'Security (security)構成',
                title: 'Security (security)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.Security',
                keywords: 'helidon, config, io.helidon.security.Security',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_Security', 'config/io_helidon_security_Security', {})
        },
        {
            path: '/config/io_helidon_webserver_WebServer',
            meta: {
                h1: 'WebServer (webserver)構成',
                title: 'WebServer (webserver)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.WebServer',
                keywords: 'helidon, config, io.helidon.webserver.WebServer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_WebServer', 'config/io_helidon_webserver_WebServer', {})
        },
        {
            path: '/config/io_helidon_grpc_server_GrpcServerConfiguration',
            meta: {
                h1: 'GrpcServerConfiguration (grpc.server)構成',
                title: 'GrpcServerConfiguration (grpc.server)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.grpc.server.GrpcServerConfiguration',
                keywords: 'helidon, config, io.helidon.grpc.server.GrpcServerConfiguration',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_grpc_server_GrpcServerConfiguration', 'config/io_helidon_grpc_server_GrpcServerConfiguration', {})
        },
        {
            path: '/config/io_helidon_grpc_client_GrpcChannelDescriptor',
            meta: {
                h1: 'GrpcChannelDescriptor (grpc.client)の構成',
                title: 'GrpcChannelDescriptor (grpc.client)の構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.grpc.client.GrpcChannelDescriptor',
                keywords: 'helidon, config, io.helidon.grpc.client.GrpcChannelDescriptor',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_grpc_client_GrpcChannelDescriptor', 'config/io_helidon_grpc_client_GrpcChannelDescriptor', {})
        },
        {
            path: '/config/io_helidon_microprofile_openapi_MPOpenAPISupport',
            meta: {
                h1: 'MPOpenAPISupport (microprofile.openapi)構成',
                title: 'MPOpenAPISupport (microprofile.openapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.microprofile.openapi.MPOpenAPISupport',
                keywords: 'helidon, config, io.helidon.microprofile.openapi.MPOpenAPISupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_openapi_MPOpenAPISupport', 'config/io_helidon_microprofile_openapi_MPOpenAPISupport', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Timeout',
            meta: {
                h1: 'Timeout (faulttolerance)構成',
                title: 'Timeout (faulttolerance)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Timeout',
                keywords: 'helidon, config, io.helidon.faulttolerance.Timeout',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Timeout', 'config/io_helidon_faulttolerance_Timeout', {})
        },
        {
            path: '/config/io_helidon_webserver_SocketConfiguration_SocketConfigurationBuilder',
            meta: {
                h1: 'SocketConfigurationBuilder (webserver.SocketConfiguration)構成',
                title: 'SocketConfigurationBuilder (webserver.SocketConfiguration)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.SocketConfiguration.SocketConfigurationBuilder',
                keywords: 'helidon, config, io.helidon.webserver.SocketConfiguration.SocketConfigurationBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_SocketConfiguration_SocketConfigurationBuilder', 'config/io_helidon_webserver_SocketConfiguration_SocketConfigurationBuilder', {})
        },
        {
            path: '/config/io_helidon_config_mp_MpConfigBuilder',
            meta: {
                h1: 'org.eclipse.microprofile.config.Config構成',
                title: 'org.eclipse.microprofile.config.Config構成',
                h1Prefix: null,
                description: 'Configuration of org.eclipse.microprofile.config.Config',
                keywords: 'helidon, config, org.eclipse.microprofile.config.Config',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_config_mp_MpConfigBuilder', 'config/io_helidon_config_mp_MpConfigBuilder', {})
        },
        {
            path: '/config/io_helidon_webclient_WebClientConfiguration',
            meta: {
                h1: 'WebClientConfiguration (webclient)構成',
                title: 'WebClientConfiguration (webclient)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.WebClientConfiguration',
                keywords: 'helidon, config, io.helidon.webclient.WebClientConfiguration',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_WebClientConfiguration', 'config/io_helidon_webclient_WebClientConfiguration', {})
        },
        {
            path: '/config/io_helidon_security_providers_abac_AbacProvider',
            meta: {
                h1: 'AbacProvider (security.providers.abac)構成',
                title: 'AbacProvider (security.providers.abac)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.abac.AbacProvider',
                keywords: 'helidon, config, io.helidon.security.providers.abac.AbacProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_abac_AbacProvider', 'config/io_helidon_security_providers_abac_AbacProvider', {})
        },
        {
            path: '/config/io_helidon_metrics_api_ComponentMetricsSettings',
            meta: {
                h1: 'ComponentMetricsSettings (metrics.api)構成',
                title: 'ComponentMetricsSettings (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.ComponentMetricsSettings',
                keywords: 'helidon, config, io.helidon.metrics.api.ComponentMetricsSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_ComponentMetricsSettings', 'config/io_helidon_metrics_api_ComponentMetricsSettings', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpauth_HttpBasicAuthProvider',
            meta: {
                h1: 'HttpBasicAuthProvider (security.providers.httpauth)構成',
                title: 'HttpBasicAuthProvider (security.providers.httpauth)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpauth.HttpBasicAuthProvider',
                keywords: 'helidon, config, io.helidon.security.providers.httpauth.HttpBasicAuthProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpauth_HttpBasicAuthProvider', 'config/io_helidon_security_providers_httpauth_HttpBasicAuthProvider', {})
        },
        {
            path: '/config/io_helidon_integrations_micrometer_MicrometerSupport',
            meta: {
                h1: 'MicrometerSupport (integrations.micrometer)構成',
                title: 'MicrometerSupport (integrations.micrometer)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.micrometer.MicrometerSupport',
                keywords: 'helidon, config, io.helidon.integrations.micrometer.MicrometerSupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_micrometer_MicrometerSupport', 'config/io_helidon_integrations_micrometer_MicrometerSupport', {})
        },
        {
            path: '/config/io_helidon_webserver_WebServerTls',
            meta: {
                h1: 'WebServerTls (webserver)構成',
                title: 'WebServerTls (webserver)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.WebServerTls',
                keywords: 'helidon, config, io.helidon.webserver.WebServerTls',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_WebServerTls', 'config/io_helidon_webserver_WebServerTls', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser',
            meta: {
                h1: 'ConfigUser (security.providers.httpauth.ConfigUserStore)構成',
                title: 'ConfigUser (security.providers.httpauth.ConfigUserStore)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpauth.ConfigUserStore.ConfigUser',
                keywords: 'helidon, config, io.helidon.security.providers.httpauth.ConfigUserStore.ConfigUser',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser', 'config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser', {})
        },
        {
            path: '/config/io_helidon_security_providers_oidc_OidcProvider',
            meta: {
                h1: 'OidcProvider (security.providers.oidc)構成',
                title: 'OidcProvider (security.providers.oidc)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.oidc.OidcProvider',
                keywords: 'helidon, config, io.helidon.security.providers.oidc.OidcProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_oidc_OidcProvider', 'config/io_helidon_security_providers_oidc_OidcProvider', {})
        },
        {
            path: '/config/io_helidon_tracing_zipkin_ZipkinTracerBuilder',
            meta: {
                h1: 'io.opentracing.Tracer構成',
                title: 'io.opentracing.Tracer構成',
                h1Prefix: null,
                description: 'Configuration of io.opentracing.Tracer',
                keywords: 'helidon, config, io.opentracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_zipkin_ZipkinTracerBuilder', 'config/io_helidon_tracing_zipkin_ZipkinTracerBuilder', {})
        },
        {
            path: '/about/kubernetes',
            meta: {
                h1: 'デスクトップ上のKubernetes',
                title: 'デスクトップ上のKubernetes',
                h1Prefix: null,
                description: 'Running Kubernetes on your desktop.',
                keywords: 'kubernetes',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-kubernetes', 'about/kubernetes', {})
        },
        {
            path: '/config/io_helidon_health_HealthSupport',
            meta: {
                h1: 'HealthSupport (health)構成',
                title: 'HealthSupport (health)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.health.HealthSupport',
                keywords: 'helidon, config, io.helidon.health.HealthSupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_health_HealthSupport', 'config/io_helidon_health_HealthSupport', {})
        },
        {
            path: '/config/io_helidon_security_providers_header_HeaderAtnProvider',
            meta: {
                h1: 'HeaderAtnProvider (security.providers.header)構成',
                title: 'HeaderAtnProvider (security.providers.header)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.header.HeaderAtnProvider',
                keywords: 'helidon, config, io.helidon.security.providers.header.HeaderAtnProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_header_HeaderAtnProvider', 'config/io_helidon_security_providers_header_HeaderAtnProvider', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig',
            meta: {
                h1: 'HeadersConfig (security.providers.httpsign.SignedHeadersConfig)構成',
                title: 'HeadersConfig (security.providers.httpsign.SignedHeadersConfig)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpsign.SignedHeadersConfig.HeadersConfig',
                keywords: 'helidon, config, io.helidon.security.providers.httpsign.SignedHeadersConfig.HeadersConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig', 'config/io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig', {})
        },
        {
            path: '/config/io_helidon_integrations_neo4j',
            meta: {
                h1: 'Neo4j構成',
                title: 'Neo4j構成',
                h1Prefix: null,
                description: 'Configuration of io_helidon_integrations_neo4j',
                keywords: 'helidon, config, io_helidon_integrations_neo4j.adoc',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_neo4j', 'config/io_helidon_integrations_neo4j', {})
        },
        {
            path: '/config/io_helidon_microprofile_lra_Coordinator',
            meta: {
                h1: 'LRA構成',
                title: 'LRA構成',
                h1Prefix: null,
                description: 'Configuration of io_helidon_microprofile_lra_Coordinator',
                keywords: 'helidon, io_helidon_microprofile_lra_Coordinator',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_lra_Coordinator', 'config/io_helidon_microprofile_lra_Coordinator', {})
        },
        {
            path: '/config/io_helidon_security_providers_common_OutboundTarget',
            meta: {
                h1: 'OutboundTarget (security.providers.common)構成',
                title: 'OutboundTarget (security.providers.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.common.OutboundTarget',
                keywords: 'helidon, config, io.helidon.security.providers.common.OutboundTarget',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_common_OutboundTarget', 'config/io_helidon_security_providers_common_OutboundTarget', {})
        },
        {
            path: '/mp/cors/why-options',
            meta: {
                h1: 'なぜ`@OPTIONS`?',
                title: 'なぜ`@OPTIONS`?',
                h1Prefix: 'MP',
                description: 'Exploration of why Helidon MP associates the `@CrossOrigin` annotation with `@OPTIONS` methods.',
                keywords: 'helidon, java, cors, mp, microprofile, jax-rs cross-origin resource sharing',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-cors-why-options', 'mp/cors/why-options', {})
        },
        {
            path: '/config/io_helidon_security_providers_google_login_GoogleTokenProvider',
            meta: {
                h1: 'GoogleTokenProvider (security.providers.google.login)構成',
                title: 'GoogleTokenProvider (security.providers.google.login)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.google.login.GoogleTokenProvider',
                keywords: 'helidon, config, io.helidon.security.providers.google.login.GoogleTokenProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_google_login_GoogleTokenProvider', 'config/io_helidon_security_providers_google_login_GoogleTokenProvider', {})
        },
        {
            path: '/config/io_helidon_grpc_core_GrpcTlsDescriptor',
            meta: {
                h1: 'GrpcTlsDescriptor (grpc.core)構成',
                title: 'GrpcTlsDescriptor (grpc.core)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.grpc.core.GrpcTlsDescriptor',
                keywords: 'helidon, config, io.helidon.grpc.core.GrpcTlsDescriptor',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_grpc_core_GrpcTlsDescriptor', 'config/io_helidon_grpc_core_GrpcTlsDescriptor', {})
        },
        {
            path: '/config/io_helidon_tracing_jaeger_JaegerTracerBuilder',
            meta: {
                h1: 'トレーサ(トレース)構成',
                title: 'トレーサ(トレース)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.Tracer',
                keywords: 'helidon, config, io.helidon.tracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_jaeger_JaegerTracerBuilder', 'config/io_helidon_tracing_jaeger_JaegerTracerBuilder', {})
        },
        {
            path: '/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings',
            meta: {
                h1: 'KeyPerformanceIndicatorMetricsSettings (metrics.api)構成',
                title: 'KeyPerformanceIndicatorMetricsSettings (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.KeyPerformanceIndicatorMetricsSettings',
                keywords: 'helidon, config, io.helidon.metrics.api.KeyPerformanceIndicatorMetricsSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings', 'config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings', {})
        },
        {
            path: '/config/io_helidon_media_common_MediaContext',
            meta: {
                h1: 'MediaContext (media.common)構成',
                title: 'MediaContext (media.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.media.common.MediaContext',
                keywords: 'helidon, config, io.helidon.media.common.MediaContext',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_media_common_MediaContext', 'config/io_helidon_media_common_MediaContext', {})
        },
        {
            path: '/config/io_helidon_security_util_TokenHandler',
            meta: {
                h1: 'TokenHandler (security.util)構成',
                title: 'TokenHandler (security.util)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.util.TokenHandler',
                keywords: 'helidon, config, io.helidon.security.util.TokenHandler',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_util_TokenHandler', 'config/io_helidon_security_util_TokenHandler', {})
        },
        {
            path: '/config/io_helidon_tracing_TracerBuilder',
            meta: {
                h1: 'TracerBuilder (tracing)構成',
                title: 'TracerBuilder (tracing)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.TracerBuilder',
                keywords: 'helidon, config, io.helidon.tracing.TracerBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_TracerBuilder', 'config/io_helidon_tracing_TracerBuilder', {})
        },
        {
            path: '/guides/jib',
            meta: {
                h1: 'Jibを使用したコンテナ・イメージのビルド',
                title: 'Jibを使用したコンテナ・イメージのビルド',
                h1Prefix: null,
                description: 'Helidon Jib Guide',
                keywords: 'helidon, guide, docker, jib',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('guides-jib', 'guides/jib', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Retry_JitterRetryPolicy',
            meta: {
                h1: 'JitterRetryPolicy (faulttolerance.Retry)構成',
                title: 'JitterRetryPolicy (faulttolerance.Retry)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Retry.JitterRetryPolicy',
                keywords: 'helidon, config, io.helidon.faulttolerance.Retry.JitterRetryPolicy',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Retry_JitterRetryPolicy', 'config/io_helidon_faulttolerance_Retry_JitterRetryPolicy', {})
        },
        {
            path: '/config/io_helidon_webclient_WebClientTls',
            meta: {
                h1: 'WebClientTls (webclient)構成',
                title: 'WebClientTls (webclient)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.WebClientTls',
                keywords: 'helidon, config, io.helidon.webclient.WebClientTls',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_WebClientTls', 'config/io_helidon_webclient_WebClientTls', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Bulkhead',
            meta: {
                h1: 'Bulkhead (faulttolerance)構成',
                title: 'Bulkhead (faulttolerance)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Bulkhead',
                keywords: 'helidon, config, io.helidon.faulttolerance.Bulkhead',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Bulkhead', 'config/io_helidon_faulttolerance_Bulkhead', {})
        },
        {
            path: '/config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperRxProvider',
            meta: {
                h1: 'IdcsRoleMapperRxProvider (security.providers.idcs.mapper)構成',
                title: 'IdcsRoleMapperRxProvider (security.providers.idcs.mapper)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.idcs.mapper.IdcsRoleMapperRxProvider',
                keywords: 'helidon, config, io.helidon.security.providers.idcs.mapper.IdcsRoleMapperRxProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_idcs_mapper_IdcsRoleMapperRxProvider', 'config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperRxProvider', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Retry_DelayingRetryPolicy',
            meta: {
                h1: 'DelayingRetryPolicy (faulttolerance.Retry)構成',
                title: 'DelayingRetryPolicy (faulttolerance.Retry)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Retry.DelayingRetryPolicy',
                keywords: 'helidon, config, io.helidon.faulttolerance.Retry.DelayingRetryPolicy',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Retry_DelayingRetryPolicy', 'config/io_helidon_faulttolerance_Retry_DelayingRetryPolicy', {})
        },
        {
            path: '/config/io_helidon_common_pki_KeyConfig_KeystoreBuilder',
            meta: {
                h1: 'KeystoreBuilder (common.pki.KeyConfig)構成',
                title: 'KeystoreBuilder (common.pki.KeyConfig)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.KeyConfig.KeystoreBuilder',
                keywords: 'helidon, config, io.helidon.common.pki.KeyConfig.KeystoreBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_KeyConfig_KeystoreBuilder', 'config/io_helidon_common_pki_KeyConfig_KeystoreBuilder', {})
        },
        {
            path: '/config/io_helidon_microprofile_server_Server',
            meta: {
                h1: 'Server (microprofile.server)の構成',
                title: 'Server (microprofile.server)の構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.microprofile.server.Server',
                keywords: 'helidon, config, io.helidon.microprofile.server.Server',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_server_Server', 'config/io_helidon_microprofile_server_Server', {})
        },
        {
            path: '/config/io_helidon_metrics_api_RegistryFilterSettings',
            meta: {
                h1: 'RegistryFilterSettings (metrics.api)構成',
                title: 'RegistryFilterSettings (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.RegistryFilterSettings',
                keywords: 'helidon, config, io.helidon.metrics.api.RegistryFilterSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_RegistryFilterSettings', 'config/io_helidon_metrics_api_RegistryFilterSettings', {})
        },
        {
            path: '/config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperRxProvider',
            meta: {
                h1: 'IdcsMtRoleMapperRxProvider (security.providers.idcs.mapper)構成',
                title: 'IdcsMtRoleMapperRxProvider (security.providers.idcs.mapper)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperRxProvider',
                keywords: 'helidon, config, io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperRxProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperRxProvider', 'config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperRxProvider', {})
        },
        {
            path: '/config/io_helidon_webserver_SocketConfiguration',
            meta: {
                h1: 'SocketConfiguration (webserver)構成',
                title: 'SocketConfiguration (webserver)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.SocketConfiguration',
                keywords: 'helidon, config, io.helidon.webserver.SocketConfiguration',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_SocketConfiguration', 'config/io_helidon_webserver_SocketConfiguration', {})
        },
        {
            path: '/config/io_helidon_microprofile_jwt',
            meta: {
                h1: 'JWT構成',
                title: 'JWT構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.microprofile.jwt',
                keywords: 'helidon, config, io.helidon.health.HealthSupport.adoc',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_jwt', 'config/io_helidon_microprofile_jwt', {})
        },
        {
            path: '/config/io_helidon_security_providers_common_OutboundConfig',
            meta: {
                h1: 'OutboundConfig (security.providers.common)構成',
                title: 'OutboundConfig (security.providers.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.common.OutboundConfig',
                keywords: 'helidon, config, io.helidon.security.providers.common.OutboundConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_common_OutboundConfig', 'config/io_helidon_security_providers_common_OutboundConfig', {})
        },
        {
            path: '/config/io_helidon_webserver_cors_CrossOriginConfig',
            meta: {
                h1: 'CrossOriginConfig (webserver.cors)構成',
                title: 'CrossOriginConfig (webserver.cors)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.cors.CrossOriginConfig',
                keywords: 'helidon, config, io.helidon.webserver.cors.CrossOriginConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_cors_CrossOriginConfig', 'config/io_helidon_webserver_cors_CrossOriginConfig', {})
        },
        {
            path: '/config/io_helidon_common_pki_KeyConfig',
            meta: {
                h1: 'KeyConfig (common.pki)構成',
                title: 'KeyConfig (common.pki)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.KeyConfig',
                keywords: 'helidon, config, io.helidon.common.pki.KeyConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_KeyConfig', 'config/io_helidon_common_pki_KeyConfig', {})
        },
        {
            path: '/config/io_helidon_security_providers_common_EvictableCache',
            meta: {
                h1: 'EvictableCache (security.providers.common)の構成',
                title: 'EvictableCache (security.providers.common)の構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.common.EvictableCache',
                keywords: 'helidon, config, io.helidon.security.providers.common.EvictableCache',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_common_EvictableCache', 'config/io_helidon_security_providers_common_EvictableCache', {})
        },
        {
            path: '/config/io_helidon_common_pki_KeyConfig_PemBuilder',
            meta: {
                h1: 'PemBuilder (common.pki.KeyConfig)構成',
                title: 'PemBuilder (common.pki.KeyConfig)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.KeyConfig.PemBuilder',
                keywords: 'helidon, config, io.helidon.common.pki.KeyConfig.PemBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_KeyConfig_PemBuilder', 'config/io_helidon_common_pki_KeyConfig_PemBuilder', {})
        },
        {
            path: '/about/managing-dependencies',
            meta: {
                h1: '依存関係の管理',
                title: '依存関係の管理',
                h1Prefix: null,
                description: 'Managing Maven dependencies',
                keywords: 'bom, dependency management',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-managing-dependencies', 'about/managing-dependencies', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpsign_InboundClientDefinition',
            meta: {
                h1: 'InboundClientDefinition (security.providers.httpsign)構成',
                title: 'InboundClientDefinition (security.providers.httpsign)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpsign.InboundClientDefinition',
                keywords: 'helidon, config, io.helidon.security.providers.httpsign.InboundClientDefinition',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpsign_InboundClientDefinition', 'config/io_helidon_security_providers_httpsign_InboundClientDefinition', {})
        },
        {
            path: '/config/io_smallrye_openapi_api_OpenApiConfig',
            meta: {
                h1: 'io.smallrye.openapi.api.OpenApiConfig構成',
                title: 'io.smallrye.openapi.api.OpenApiConfig構成',
                h1Prefix: null,
                description: 'Configuration of io.smallrye.openapi.api.OpenApiConfig',
                keywords: 'helidon, config, io.smallrye.openapi.api.OpenApiConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_smallrye_openapi_api_OpenApiConfig', 'config/io_smallrye_openapi_api_OpenApiConfig', {})
        },
        {
            path: '/config/io_helidon_common_configurable_Resource',
            meta: {
                h1: 'Resource (common.configurable)構成',
                title: 'Resource (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.Resource',
                keywords: 'helidon, config, io.helidon.common.configurable.Resource',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_Resource', 'config/io_helidon_common_configurable_Resource', {})
        },
        {
            path: '/config/io_helidon_metrics_api_BaseMetricsSettings',
            meta: {
                h1: 'BaseMetricsSettings (metrics.api)の構成',
                title: 'BaseMetricsSettings (metrics.api)の構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.BaseMetricsSettings',
                keywords: 'helidon, config, io.helidon.metrics.api.BaseMetricsSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_BaseMetricsSettings', 'config/io_helidon_metrics_api_BaseMetricsSettings', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpsign_HttpSignProvider',
            meta: {
                h1: 'HttpSignProvider (security.providers.httpsign)構成',
                title: 'HttpSignProvider (security.providers.httpsign)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpsign.HttpSignProvider',
                keywords: 'helidon, config, io.helidon.security.providers.httpsign.HttpSignProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpsign_HttpSignProvider', 'config/io_helidon_security_providers_httpsign_HttpSignProvider', {})
        },
        {
            path: '/config/io_helidon_webclient_Proxy',
            meta: {
                h1: 'Proxy (webclient)構成',
                title: 'Proxy (webclient)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.Proxy',
                keywords: 'helidon, config, io.helidon.webclient.Proxy',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_Proxy', 'config/io_helidon_webclient_Proxy', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_CircuitBreaker',
            meta: {
                h1: 'CircuitBreaker (faulttolerance)構成',
                title: 'CircuitBreaker (faulttolerance)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.CircuitBreaker',
                keywords: 'helidon, config, io.helidon.faulttolerance.CircuitBreaker',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_CircuitBreaker', 'config/io_helidon_faulttolerance_CircuitBreaker', {})
        },
        {
            path: '/config/io_helidon_tracing_Tracer',
            meta: {
                h1: 'トレーサ(トレース)構成',
                title: 'トレーサ(トレース)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.Tracer',
                keywords: 'helidon, config, io.helidon.tracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_Tracer', 'config/io_helidon_tracing_Tracer', {})
        },
        {
            path: '/config/io_helidon_openapi_SEOpenAPISupport',
            meta: {
                h1: 'SEOpenAPISupport (openapi)構成',
                title: 'SEOpenAPISupport (openapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.openapi.SEOpenAPISupport',
                keywords: 'helidon, config, io.helidon.openapi.SEOpenAPISupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_openapi_SEOpenAPISupport', 'config/io_helidon_openapi_SEOpenAPISupport', {})
        },
        {
            path: '/mp/introduction/microprofile',
            meta: {
                h1: 'Helidon MicroProfile',
                title: 'Helidon MicroProfile',
                h1Prefix: 'MP',
                description: 'getting started with Helidon Microprofile',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-introduction-microprofile', 'mp/introduction/microprofile', {})
        },
        {
            path: '/config/io_helidon_security_providers_oidc_common_OidcConfig',
            meta: {
                h1: 'OidcConfig (security.providers.oidc.common)構成',
                title: 'OidcConfig (security.providers.oidc.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.oidc.common.OidcConfig',
                keywords: 'helidon, config, io.helidon.security.providers.oidc.common.OidcConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_oidc_common_OidcConfig', 'config/io_helidon_security_providers_oidc_common_OidcConfig', {})
        },
        {
            path: '/config/io_helidon_security_providers_jwt_JwtProvider',
            meta: {
                h1: 'JwtProvider (security.providers.jwt)構成',
                title: 'JwtProvider (security.providers.jwt)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.jwt.JwtProvider',
                keywords: 'helidon, config, io.helidon.security.providers.jwt.JwtProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_jwt_JwtProvider', 'config/io_helidon_security_providers_jwt_JwtProvider', {})
        },
        {
            path: '/config/io_helidon_security_providers_httpauth_HttpDigestAuthProvider',
            meta: {
                h1: 'HttpDigestAuthProvider (security.providers.httpauth)構成',
                title: 'HttpDigestAuthProvider (security.providers.httpauth)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.httpauth.HttpDigestAuthProvider',
                keywords: 'helidon, config, io.helidon.security.providers.httpauth.HttpDigestAuthProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_httpauth_HttpDigestAuthProvider', 'config/io_helidon_security_providers_httpauth_HttpDigestAuthProvider', {})
        },
        {
            path: '/config/io_helidon_servicecommon_rest_RestServiceSettings',
            meta: {
                h1: 'RestServiceSettings (servicecommon.rest)構成',
                title: 'RestServiceSettings (servicecommon.rest)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.servicecommon.rest.RestServiceSettings',
                keywords: 'helidon, config, io.helidon.servicecommon.rest.RestServiceSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_servicecommon_rest_RestServiceSettings', 'config/io_helidon_servicecommon_rest_RestServiceSettings', {})
        },
        {
            path: '/config/io_helidon_common_configurable_LruCache',
            meta: {
                h1: 'LruCache (common.configurable)構成',
                title: 'LruCache (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.LruCache',
                keywords: 'helidon, config, io.helidon.common.configurable.LruCache',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_LruCache', 'config/io_helidon_common_configurable_LruCache', {})
        },
        {
            path: '/config/io_helidon_metrics_api_MetricsSettings',
            meta: {
                h1: 'MetricsSettings (metrics.api)構成',
                title: 'MetricsSettings (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.MetricsSettings',
                keywords: 'helidon, config, io.helidon.metrics.api.MetricsSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_MetricsSettings', 'config/io_helidon_metrics_api_MetricsSettings', {})
        },
        {
            path: '/', redirect: 'about/introduction'
        },
        {
            path: '*', redirect: '/'
        }
    ];
}
function createNav(){
    return [
        {
            type: 'page',
            title: '概要',
            to: '/about/introduction',
            action: 'lightbulb'
        },
        {
            type: 'page',
            title: '開始',
            to: '/about/prerequisites',
            action: 'rocket_launch'
        },
        {
            type: 'page',
            title: 'Helidon CLI',
            to: '/about/cli',
            action: 'terminal'
        },
        {
            type: 'groups',
            items: [
                {
                    type: 'group',
                    title: 'Helidon SE',
                    group: '/se',
                    items: [
                        {
                            type: 'page',
                            title: '概要',
                            to: '/se/introduction',
                            action: 'lightbulb'
                        },
                        {
                            type: 'menu',
                            title: 'ガイド',
                            group: '/se/guides',
                            items: [
                                {
                                    type: 'page',
                                    title: '概要',
                                    to: '/se/guides/overview',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SEクイックスタート',
                                    to: '/se/guides/quickstart',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE構成ガイド',
                                    to: '/se/guides/config',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SEヘルス・チェック・ガイド',
                                    to: '/se/guides/health',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SEメトリクス・ガイド',
                                    to: '/se/guides/metrics',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド',
                                    to: '/se/guides/security-oidc',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SEトレース・ガイド',
                                    to: '/se/guides/tracing',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE 2.xアップグレード・ガイド',
                                    to: '/se/guides/migration',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE 3.xアップグレード・ガイド',
                                    to: '/se/guides/migration_3x',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Mavenガイド',
                                    to: '/se/guides/maven-build',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Gradleガイド',
                                    to: '/se/guides/gradle-build',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'GraalVMネイティブ・イメージ',
                                    to: '/se/guides/graalnative',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                                    to: '/se/guides/jlink-image',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE WebClientガイド',
                                    to: '/se/guides/webclient',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE DBクライアント・ガイド',
                                    to: '/se/guides/dbclient',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'パフォーマンス・チューニング',
                                    to: '/se/guides/performance-tuning',
                                    action: null
                                }
                            ],
                            action: 'explore'
                        },
                        {
                            type: 'menu',
                            title: '構成',
                            group: '/se/config',
                            items: [
                                {
                                    type: 'page',
                                    title: '構成コンポーネント',
                                    to: '/se/config/introduction',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '階層機能',
                                    to: '/se/config/hierarchical-features',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'プロパティ・マッピング',
                                    to: '/se/config/property-mapping',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'サポートされているその他の形式およびソース',
                                    to: '/se/config/supported-formats',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '構成プロファイル',
                                    to: '/se/config/config-profiles',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '可変性のサポート',
                                    to: '/se/config/mutability-support',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '拡張構成に関するトピック',
                                    to: '/se/config/advanced-configuration',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '拡張',
                                    to: '/se/config/extensions',
                                    action: null
                                }
                            ],
                            action: 'settings'
                        },
                        {
                            type: 'page',
                            title: 'コア',
                            to: '/se/cors',
                            action: 'share'
                        },
                        {
                            type: 'page',
                            title: 'DBクライアント',
                            to: '/se/dbclient',
                            action: 'storage'
                        },
                        {
                            type: 'menu',
                            title: 'gRPC',
                            group: '/se/grpc',
                            items: [
                                {
                                    type: 'page',
                                    title: 'gRPCサーバー',
                                    to: '/se/grpc/server',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'gRPCクライアント',
                                    to: '/se/grpc/client',
                                    action: null
                                }
                            ],
                            action: 'swap_horiz'
                        },
                        {
                            type: 'page',
                            title: 'GraphQLサーバー',
                            to: '/se/graphql',
                            action: 'graphic_eq'
                        },
                        {
                            type: 'page',
                            title: 'ヘルス・チェック',
                            to: '/se/health',
                            action: 'favorite_outline'
                        },
                        {
                            type: 'menu',
                            title: 'メトリクス',
                            group: '/se/metrics',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Helidon SEのメトリクス',
                                    to: '/se/metrics/metrics',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'マイクロメーター・メトリクス',
                                    to: '/se/metrics/micrometer',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Exemplarsのメトリクス・サポート',
                                    to: '/se/metrics/prometheus-exemplar-support',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'メトリクス対応モジュール',
                                    to: '/se/metrics/metrics-capable-components',
                                    action: null
                                }
                            ],
                            action: 'av_timer'
                        },
                        {
                            type: 'page',
                            title: 'OpenAPI',
                            to: '/se/openapi',
                            action: 'donut_large'
                        },
                        {
                            type: 'menu',
                            title: '統合',
                            group: '/se/integrations',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Oracle Cloud Infrastructure統合',
                                    to: '/se/integrations/oci',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'HashiCorp Vault',
                                    to: '/se/integrations/hcv',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Neo4j',
                                    to: '/se/integrations/neo4j',
                                    action: null
                                }
                            ],
                            action: 'filter_drama'
                        },
                        {
                            type: 'menu',
                            title: 'リアクティブ・ストリーム',
                            group: '/se/reactivestreams',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Helidonリアクティブ・エンジン',
                                    to: '/se/reactivestreams/engine',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                                    to: '/se/reactivestreams/rsoperators',
                                    action: null
                                }
                            ],
                            action: 'waves'
                        },
                        {
                            type: 'page',
                            title: 'リアクティブ・メッセージング',
                            to: '/se/reactive-messaging',
                            action: 'message'
                        },
                        {
                            type: 'page',
                            title: 'リアクティブWebサーバー',
                            to: '/se/webserver',
                            action: 'settings_ethernet'
                        },
                        {
                            type: 'menu',
                            title: 'セキュリティ',
                            group: '/se/security',
                            items: [
                                {
                                    type: 'page',
                                    title: 'セキュリティの概要',
                                    to: '/se/security/introduction',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'セキュリティ・プロバイダ',
                                    to: '/se/security/providers',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'クラウド・セキュリティ・コンテナ統合',
                                    to: '/se/security/containers-integration',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'セキュリティ・ツール',
                                    to: '/se/security/tools',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'セキュリティの強化',
                                    to: '/se/security/extensibility',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JEP-290',
                                    to: '/se/security/jep-290',
                                    action: null
                                }
                            ],
                            action: 'security'
                        },
                        {
                            type: 'page',
                            title: 'スケジュール',
                            to: '/se/scheduling',
                            action: 'access_alarm'
                        },
                        {
                            type: 'page',
                            title: 'トレース',
                            to: '/se/tracing',
                            action: 'timeline'
                        },
                        {
                            type: 'page',
                            title: 'Webクライアント',
                            to: '/se/webclient',
                            action: 'http'
                        },
                        {
                            type: 'page',
                            title: 'WebSocket',
                            to: '/se/websocket',
                            action: 'timeline'
                        },
                        {
                            type: 'page',
                            title: 'AOT',
                            to: '/se/aot',
                            action: 'save'
                        },
                        {
                            type: 'page',
                            title: 'フォルト・トレランス',
                            to: '/se/fault-tolerance',
                            action: 'warning'
                        }
                    ],
                    action: null
                },
                {
                    type: 'group',
                    title: 'Helidon MP',
                    group: '/mp',
                    items: [
                        {
                            type: 'page',
                            title: '概要',
                            to: '/mp/introduction',
                            action: 'lightbulb'
                        },
                        {
                            type: 'menu',
                            title: 'ガイド',
                            group: '/mp/guides',
                            items: [
                                {
                                    type: 'page',
                                    title: '概要',
                                    to: '/mp/guides/overview',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MPクイックスタート',
                                    to: '/mp/guides/quickstart',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MP構成ガイド',
                                    to: '/mp/guides/config',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MPヘルス・チェック・ガイド',
                                    to: '/mp/guides/health',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MPメトリクス・ガイド',
                                    to: '/mp/guides/metrics',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MP OIDCセキュリティ・プロバイダ',
                                    to: '/mp/guides/security-oidc',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MPトレース・ガイド',
                                    to: '/mp/guides/tracing',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MPチュートリアル',
                                    to: '/mp/guides/mp-tutorial',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MP 2.xアップグレード・ガイド',
                                    to: '/mp/guides/migration',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon MP 3.xアップグレード・ガイド',
                                    to: '/mp/guides/migration_3x',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Mavenガイド',
                                    to: '/mp/guides/maven-build',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Gradleガイド',
                                    to: '/mp/guides/gradle-build',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'GraalVMネイティブ・イメージ',
                                    to: '/mp/guides/graalnative',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                                    to: '/mp/guides/jlink-image',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SEサービスの再利用',
                                    to: '/mp/guides/se-services',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JUnit 5ガイドによるHelidon MPテスト',
                                    to: '/mp/guides/testing-junit5',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JBatchガイド付きHelidon',
                                    to: '/mp/guides/jbatch',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'パフォーマンス・チューニング',
                                    to: '/mp/guides/performance-tuning',
                                    action: null
                                }
                            ],
                            action: 'explore'
                        },
                        {
                            type: 'page',
                            title: 'Beanバリデーション',
                            to: '/mp/beanvalidation',
                            action: 'receipt'
                        },
                        {
                            type: 'menu',
                            title: '構成',
                            group: '/mp/config',
                            items: [
                                {
                                    type: 'page',
                                    title: 'MicroProfile構成',
                                    to: '/mp/config/introduction',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'マイクロプロファイル構成ソース',
                                    to: '/mp/config/advanced-configuration',
                                    action: null
                                }
                            ],
                            action: 'settings'
                        },
                        {
                            type: 'page',
                            title: 'コア',
                            to: '/mp/cors/cors',
                            action: 'share'
                        },
                        {
                            type: 'page',
                            title: 'フォルト・トレランス',
                            to: '/mp/fault-tolerance',
                            action: 'warning'
                        },
                        {
                            type: 'menu',
                            title: 'gRPC',
                            group: '/mp/grpc',
                            items: [
                                {
                                    type: 'page',
                                    title: 'gRPC MicroProfileサーバー',
                                    to: '/mp/grpc/server',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'gRPC MicroProfileクライアント',
                                    to: '/mp/grpc/client',
                                    action: null
                                }
                            ],
                            action: 'swap_horiz'
                        },
                        {
                            type: 'page',
                            title: 'GraphQL',
                            to: '/mp/graphql',
                            action: 'graphic_eq'
                        },
                        {
                            type: 'page',
                            title: 'ヘルス・チェック',
                            to: '/mp/health',
                            action: 'favorite_outline'
                        },
                        {
                            type: 'menu',
                            title: 'JAX-RS/Jersey',
                            group: '/mp/jaxrs',
                            items: [
                                {
                                    type: 'page',
                                    title: 'アプリケーションの構成',
                                    to: '/mp/jaxrs/application-configuration',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JAX-RSアプリケーション',
                                    to: '/mp/jaxrs/jaxrs-applications',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Jakarta REST (JAX- RS)クライアント',
                                    to: '/mp/jaxrs/jaxrs-client',
                                    action: null
                                }
                            ],
                            action: 'settings_ethernet'
                        },
                        {
                            type: 'page',
                            title: '永続性',
                            to: '/mp/persistence',
                            action: 'dns'
                        },
                        {
                            type: 'page',
                            title: 'JWT',
                            to: '/mp/jwt',
                            action: 'verified_user'
                        },
                        {
                            type: 'page',
                            title: 'Long Running Actions (LRA)',
                            to: '/mp/lra',
                            action: 'pending_actions'
                        },
                        {
                            type: 'menu',
                            title: 'メトリクス',
                            group: '/mp/metrics',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Helidon MPのメトリック',
                                    to: '/mp/metrics/metrics',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'マイクロメーターのサポート',
                                    to: '/mp/metrics/micrometer',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'OpenMetrics Exemplarサポート',
                                    to: '/mp/metrics/prometheus-exemplar-support',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'メトリクス対応モジュール',
                                    to: '/mp/metrics/metrics-capable-components',
                                    action: null
                                }
                            ],
                            action: 'av_timer'
                        },
                        {
                            type: 'page',
                            title: 'OpenAPI',
                            to: '/mp/openapi',
                            action: 'donut_large'
                        },
                        {
                            type: 'menu',
                            title: '統合',
                            group: '/mp/integrations',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Oracle Cloud Infrastructure統合',
                                    to: '/mp/integrations/oci',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'HashiCorp Vault',
                                    to: '/mp/integrations/hcv',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Jedis',
                                    to: '/mp/integrations/jedis',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Neo4j',
                                    to: '/mp/integrations/neo4j',
                                    action: null
                                }
                            ],
                            action: 'filter_drama'
                        },
                        {
                            type: 'menu',
                            title: 'リアクティブ・ストリーム',
                            group: '/mp/reactivestreams',
                            items: [
                                {
                                    type: 'page',
                                    title: 'Helidonリアクティブ・エンジン',
                                    to: '/mp/reactivestreams/engine',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'MicroProfileリアクティブ・ストリーム・オペレータ',
                                    to: '/mp/reactivestreams/rsoperators',
                                    action: null
                                }
                            ],
                            action: 'waves'
                        },
                        {
                            type: 'menu',
                            title: 'リアクティブ・メッセージング',
                            group: '/mp/reactivemessaging',
                            items: [
                                {
                                    type: 'page',
                                    title: 'リアクティブ・メッセージMP',
                                    to: '/mp/reactivemessaging/introduction',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Kafkaコネクタ',
                                    to: '/mp/reactivemessaging/kafka',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JMSコネクタ',
                                    to: '/mp/reactivemessaging/jms',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Oracle AQコネクタ',
                                    to: '/mp/reactivemessaging/aq',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'モック・コネクタ',
                                    to: '/mp/reactivemessaging/mock',
                                    action: null
                                }
                            ],
                            action: 'message'
                        },
                        {
                            type: 'page',
                            title: 'RESTクライアント',
                            to: '/mp/restclient',
                            action: 'airplay'
                        },
                        {
                            type: 'menu',
                            title: 'セキュリティ',
                            group: '/mp/security',
                            items: [
                                {
                                    type: 'page',
                                    title: 'セキュリティの追加',
                                    to: '/mp/security/security',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'セキュリティ・プロバイダ',
                                    to: '/mp/security/providers',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: '構成シークレット',
                                    to: '/mp/security/configuration-secrets',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'JEP-290',
                                    to: '/mp/security/jep-290',
                                    action: null
                                }
                            ],
                            action: 'security'
                        },
                        {
                            type: 'page',
                            title: 'スケジュール',
                            to: '/mp/scheduling',
                            action: 'access_alarm'
                        },
                        {
                            type: 'page',
                            title: 'トレース',
                            to: '/mp/tracing',
                            action: 'timeline'
                        },
                        {
                            type: 'page',
                            title: 'WebSocket',
                            to: '/mp/websocket',
                            action: 'sync_alt'
                        },
                        {
                            type: 'page',
                            title: 'サーバー',
                            to: '/mp/server',
                            action: 'settings_ethernet'
                        },
                        {
                            type: 'page',
                            title: 'AOT',
                            to: '/mp/aot',
                            action: 'save'
                        },
                        {
                            type: 'menu',
                            title: 'テスト',
                            group: '/mp',
                            items: [
                                {
                                    type: 'page',
                                    title: 'JUnit5でのテスト',
                                    to: '/mp/testing',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'TestNGを使用したテスト',
                                    to: '/mp/testing-ng',
                                    action: null
                                }
                            ],
                            action: 'thumbs_up_down'
                        }
                    ],
                    action: null
                }
            ],
            action: null
        },
        {
            type: 'header',
            title: '追加リソース',
            action: null
        },
        {
            type: 'link',
            title: 'Javadoc',
            href: 'apidocs/index.html?overview-summary.html',
            target: '_blank',
            action: 'library_books'
        },
        {
            type: 'page',
            title: '構成リファレンス',
            to: '/config/config_reference',
            action: 'library_books'
        },
        {
            type: 'page',
            title: 'コミュニティ',
            to: '/community',
            action: 'fa-github'
        }
    ];
}
