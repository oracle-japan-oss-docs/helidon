
function createConfig() {
    return {
        home: "about/01_overview",
        release: "2.2.1-SNAPSHOT",
        releases: [
            "2.2.1-SNAPSHOT"
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
            path: '/about/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: null,
                description: 'Helidon documentation',
                keywords: 'helidon, java, microservices, microprofile, documentation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-01_overview', '/about/01_overview', {})
        },
        {
            path: '/about/02_introduction',
            meta: {
                h1: 'Helidonについて',
                title: 'Helidonについて',
                h1Prefix: null,
                description: 'about Helidon',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-02_introduction', '/about/02_introduction', {})
        },
        {
            path: '/about/03_prerequisites',
            meta: {
                h1: '開始',
                title: '開始',
                h1Prefix: null,
                description: 'Helidon pre-requisites and getting started',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-03_prerequisites', '/about/03_prerequisites', {})
        },
        {
            path: '/about/04_managing-dependencies',
            meta: {
                h1: '依存関係の管理',
                title: '依存関係の管理',
                h1Prefix: null,
                description: 'Managing Maven dependencies',
                keywords: 'bom, dependency management',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-04_managing-dependencies', '/about/04_managing-dependencies', {})
        },
        {
            path: '/about/05_cli',
            meta: {
                h1: 'Helidon CLI',
                title: 'Helidon CLI',
                h1Prefix: null,
                description: 'Helidon CLI',
                keywords: 'helidon cli',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-05_cli', '/about/05_cli', {})
        },
        {
            path: '/about/05_kubernetes',
            meta: {
                h1: 'デスクトップ上のKubernetes',
                title: 'デスクトップ上のKubernetes',
                h1Prefix: null,
                description: 'Running Kubernetes on your desktop.',
                keywords: 'kubernetes',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-05_kubernetes', '/about/05_kubernetes', {})
        },
        {
            path: '/about/10_upgrade',
            meta: {
                h1: '1.4からのアップグレード',
                title: '1.4からのアップグレード',
                h1Prefix: null,
                description: 'Helidon Upgrade Guide',
                keywords: 'helidon upgrade migration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-10_upgrade', '/about/10_upgrade', {})
        },
        {
            path: '/se/introduction/01_introduction',
            meta: {
                h1: 'Helidon SE',
                title: 'Helidon SE',
                h1Prefix: 'SE',
                description: 'Helidon SE introduction',
                keywords: 'helidon, java, SE, microservices, Netty',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-introduction-01_introduction', '/se/introduction/01_introduction', {})
        },
        {
            path: '/se/guides/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'SE',
                description: 'Helidon SE Guides',
                keywords: 'helidon, java, microservices, microprofile, guides',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-01_overview', '/se/guides/01_overview', {})
        },
        {
            path: '/se/guides/02_quickstart',
            meta: {
                h1: 'Helidon SEクイックスタート',
                title: 'Helidon SEクイックスタート',
                h1Prefix: 'SE',
                description: 'Helidon SE Quickstart Guide',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-02_quickstart', '/se/guides/02_quickstart', {})
        },
        {
            path: '/se/guides/03_config',
            meta: {
                h1: 'Helidon SE構成ガイド',
                title: 'Helidon SE構成ガイド',
                h1Prefix: 'SE',
                description: 'Helidon configuration',
                keywords: 'helidon, configuration, microprofile, guide, SE',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-03_config', '/se/guides/03_config', {})
        },
        {
            path: '/se/guides/04_health',
            meta: {
                h1: 'Helidon SEヘルス・チェック・ガイド',
                title: 'Helidon SEヘルス・チェック・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon health-checks',
                keywords: 'helidon, health-check, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-04_health', '/se/guides/04_health', {})
        },
        {
            path: '/se/guides/05_metrics',
            meta: {
                h1: 'Helidon SEメトリクス・ガイド',
                title: 'Helidon SEメトリクス・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-05_metrics', '/se/guides/05_metrics', {})
        },
        {
            path: '/se/guides/05_security_oidc',
            meta: {
                h1: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド',
                title: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon OIDC Security Provider',
                keywords: 'helidon, security, guide, oidc, provider',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-05_security_oidc', '/se/guides/05_security_oidc', {})
        },
        {
            path: '/se/guides/06_tracing',
            meta: {
                h1: 'Helidon SEトレース・ガイド',
                title: 'Helidon SEトレース・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon tracing',
                keywords: 'helidon, tracing, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-06_tracing', '/se/guides/06_tracing', {})
        },
        {
            path: '/se/guides/15_migration',
            meta: {
                h1: 'Helidon SEアップグレード・ガイド',
                title: 'Helidon SEアップグレード・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-15_migration', '/se/guides/15_migration', {})
        },
        {
            path: '/se/guides/25_maven_build',
            meta: {
                h1: 'Mavenガイド',
                title: 'Mavenガイド',
                h1Prefix: 'SE',
                description: 'Helidon Maven Guide',
                keywords: 'helidon, guide, maven, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-25_maven_build', '/se/guides/25_maven_build', {})
        },
        {
            path: '/se/guides/26_gradle_build',
            meta: {
                h1: 'Gradleガイド',
                title: 'Gradleガイド',
                h1Prefix: 'SE',
                description: 'Helidon Gradle Guide',
                keywords: 'helidon, guide, gradle, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-26_gradle_build', '/se/guides/26_gradle_build', {})
        },
        {
            path: '/se/guides/36_graalnative',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon Native Image',
                keywords: 'helidon, guide, graalvm, native-image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-36_graalnative', '/se/guides/36_graalnative', {})
        },
        {
            path: '/se/guides/37_jlink_image',
            meta: {
                h1: '`jlink`を使用したカスタム・ランタイム・イメージ',
                title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon Custom Runtime Images',
                keywords: 'helidon, guide, jlink, image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-37_jlink_image', '/se/guides/37_jlink_image', {})
        },
        {
            path: '/se/config/01_introduction',
            meta: {
                h1: '構成コンポーネント',
                title: '構成コンポーネント',
                h1Prefix: 'SE',
                description: 'Helidon config introduction',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-01_introduction', '/se/config/01_introduction', {})
        },
        {
            path: '/se/config/02_config-sources',
            meta: {
                h1: '構成のロード: 構成ソースおよびパーサー',
                title: '構成のロード: 構成ソースおよびパーサー',
                h1Prefix: 'SE',
                description: 'A summary of Helidon config sources and parsers',
                keywords: 'Helidon, config, sources, parsers',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-02_config-sources', '/se/config/02_config-sources', {})
        },
        {
            path: '/se/config/03_hierarchical-features',
            meta: {
                h1: '階層機能',
                title: '階層機能',
                h1Prefix: 'SE',
                description: 'Helidon hierarchical features',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-03_hierarchical-features', '/se/config/03_hierarchical-features', {})
        },
        {
            path: '/se/config/04_property-mapping',
            meta: {
                h1: 'プロパティ・マッピング',
                title: 'プロパティ・マッピング',
                h1Prefix: 'SE',
                description: 'Helidon config property mapping',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-04_property-mapping', '/se/config/04_property-mapping', {})
        },
        {
            path: '/se/config/05_mutability-support',
            meta: {
                h1: '可変性のサポート',
                title: '可変性のサポート',
                h1Prefix: 'SE',
                description: 'Helidon mutability support',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-05_mutability-support', '/se/config/05_mutability-support', {})
        },
        {
            path: '/se/config/06_advanced-configuration',
            meta: {
                h1: '拡張構成のトピック',
                title: '拡張構成のトピック',
                h1Prefix: 'SE',
                description: 'Helidon config advanced configuration',
                keywords: 'helidon, config, meta',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-06_advanced-configuration', '/se/config/06_advanced-configuration', {})
        },
        {
            path: '/se/config/07_extensions',
            meta: {
                h1: '拡張',
                title: '拡張',
                h1Prefix: 'SE',
                description: 'Helidon config extensions',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-07_extensions', '/se/config/07_extensions', {})
        },
        {
            path: '/se/config/08_supported-formats',
            meta: {
                h1: 'サポートされているその他の形式およびソース',
                title: 'サポートされているその他の形式およびソース',
                h1Prefix: 'SE',
                description: 'Helidon config supported formats and sources',
                keywords: 'helidon, config',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-config-08_supported-formats', '/se/config/08_supported-formats', {})
        },
        {
            path: '/se/cors/01_introduction',
            meta: {
                h1: 'Helidon SEのCORSについて',
                title: 'Helidon SEのCORSについて',
                h1Prefix: 'SE',
                description: 'Helidon SE CORS Support',
                keywords: 'helidon, java, cors, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-cors-01_introduction', '/se/cors/01_introduction', {})
        },
        {
            path: '/se/cors/02_using-the-api',
            meta: {
                h1: 'Helidon SE CORS APIの使用',
                title: 'Helidon SE CORS APIの使用',
                h1Prefix: 'SE',
                description: 'Using the Helidon SE CORS API',
                keywords: 'helidon, java, cors, se, api',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-cors-02_using-the-api', '/se/cors/02_using-the-api', {})
        },
        {
            path: '/se/cors/03_using-configuration',
            meta: {
                h1: 'CORSの構成の使用',
                title: 'CORSの構成の使用',
                h1Prefix: 'SE',
                description: 'Helidon CORS Configuration',
                keywords: 'helidon, java, cors, configuration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-cors-03_using-configuration', '/se/cors/03_using-configuration', {})
        },
        {
            path: '/se/cors/04_support-in-builtin-services',
            meta: {
                h1: '組込みサービスでのCORSの使用',
                title: '組込みサービスでのCORSの使用',
                h1Prefix: 'SE',
                description: 'Helidon SE CORS Support in Built-in Services',
                keywords: 'helidon, java, cors, se, services',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-cors-04_support-in-builtin-services', '/se/cors/04_support-in-builtin-services', {})
        },
        {
            path: '/se/dbclient/01_introduction',
            meta: {
                h1: 'Helidon DBクライアントについて',
                title: 'Helidon DBクライアントについて',
                h1Prefix: 'SE',
                description: 'Helidon DB Client',
                keywords: 'helidon, se, database, dbclient',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-dbclient-01_introduction', '/se/dbclient/01_introduction', {})
        },
        {
            path: '/se/grpc/01_introduction',
            meta: {
                h1: 'gRPCサーバーの概要',
                title: 'gRPCサーバーの概要',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Server Introduction',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-01_introduction', '/se/grpc/01_introduction', {})
        },
        {
            path: '/se/grpc/02_configuration',
            meta: {
                h1: 'gRPCサーバー構成',
                title: 'gRPCサーバー構成',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Server Configuration',
                keywords: 'helidon, grpc, java, configuration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-02_configuration', '/se/grpc/02_configuration', {})
        },
        {
            path: '/se/grpc/03_routing',
            meta: {
                h1: 'gRPCサーバーのルーティング',
                title: 'gRPCサーバーのルーティング',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Server Routing',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-03_routing', '/se/grpc/03_routing', {})
        },
        {
            path: '/se/grpc/04_service_implementation',
            meta: {
                h1: 'gRPCサービスの実装',
                title: 'gRPCサービスの実装',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Service Implementation',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-04_service_implementation', '/se/grpc/04_service_implementation', {})
        },
        {
            path: '/se/grpc/05_interceptors',
            meta: {
                h1: 'gRPCインターセプタ',
                title: 'gRPCインターセプタ',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Service Interceptors',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-05_interceptors', '/se/grpc/05_interceptors', {})
        },
        {
            path: '/se/grpc/06_health_checks',
            meta: {
                h1: 'gRPCサービス・ヘルス・チェック',
                title: 'gRPCサービス・ヘルス・チェック',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Service Health Checks',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-06_health_checks', '/se/grpc/06_health_checks', {})
        },
        {
            path: '/se/grpc/07_metrics',
            meta: {
                h1: 'gRPCサービス・メトリクス',
                title: 'gRPCサービス・メトリクス',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Service Metrics',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-07_metrics', '/se/grpc/07_metrics', {})
        },
        {
            path: '/se/grpc/08_security',
            meta: {
                h1: 'gRPCサーバー・セキュリティ',
                title: 'gRPCサーバー・セキュリティ',
                h1Prefix: 'SE',
                description: 'Helidon Security gRPC integration',
                keywords: 'helidon, grpc, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-08_security', '/se/grpc/08_security', {})
        },
        {
            path: '/se/grpc/21_client_introduction',
            meta: {
                h1: 'gRPCクライアントの概要',
                title: 'gRPCクライアントの概要',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Client Introduction',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-21_client_introduction', '/se/grpc/21_client_introduction', {})
        },
        {
            path: '/se/grpc/22_client_configuration',
            meta: {
                h1: 'gRPCクライアント構成',
                title: 'gRPCクライアント構成',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Client Configuration',
                keywords: 'helidon, grpc, java, configuration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-22_client_configuration', '/se/grpc/22_client_configuration', {})
        },
        {
            path: '/se/grpc/23_client_implementation',
            meta: {
                h1: 'gRPCクライアント実装',
                title: 'gRPCクライアント実装',
                h1Prefix: 'SE',
                description: 'Helidon gRPC Client Implementation',
                keywords: 'helidon, grpc, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-grpc-23_client_implementation', '/se/grpc/23_client_implementation', {})
        },
        {
            path: '/se/graphql/01_introduction',
            meta: {
                h1: 'GraphQLサーバーの概要',
                title: 'GraphQLサーバーの概要',
                h1Prefix: 'SE',
                description: 'Helidon GraphQL Server Introduction',
                keywords: 'helidon, graphql, java',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-graphql-01_introduction', '/se/graphql/01_introduction', {})
        },
        {
            path: '/se/health/01_health',
            meta: {
                h1: 'ヘルス・チェック',
                title: 'ヘルス・チェック',
                h1Prefix: 'SE',
                description: 'Helidon health checks',
                keywords: 'helidon, health-checks, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-health-01_health', '/se/health/01_health', {})
        },
        {
            path: '/se/health/02_health_in_k8s',
            meta: {
                h1: 'Kubernetesプローブ',
                title: 'Kubernetesプローブ',
                h1Prefix: 'SE',
                description: 'Kubernetes probes',
                keywords: 'helidon, readiness, liveness, probes, kubernetes',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-health-02_health_in_k8s', '/se/health/02_health_in_k8s', {})
        },
        {
            path: '/se/metrics/01_metrics',
            meta: {
                h1: 'メトリクス',
                title: 'メトリクス',
                h1Prefix: 'SE',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-01_metrics', '/se/metrics/01_metrics', {})
        },
        {
            path: '/se/metrics/02_prometheus',
            meta: {
                h1: 'Prometheusメトリクス',
                title: 'Prometheusメトリクス',
                h1Prefix: 'SE',
                description: 'Helidon Prometheus metrics',
                keywords: 'helidon, metrics, prometheus',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-metrics-02_prometheus', '/se/metrics/02_prometheus', {})
        },
        {
            path: '/se/openapi/01_openapi',
            meta: {
                h1: 'SEのOpenAPI',
                title: 'SEのOpenAPI',
                h1Prefix: 'SE',
                description: 'Helidon SE OpenAPI Support',
                keywords: 'helidon, se, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-openapi-01_openapi', '/se/openapi/01_openapi', {})
        },
        {
            path: '/se/reactivestreams/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'SE',
                description: 'Reactive Streams support in Helidon',
                keywords: 'helidon, se, microprofile, reactivestreams',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivestreams-01_overview', '/se/reactivestreams/01_overview', {})
        },
        {
            path: '/se/reactivestreams/02_engine',
            meta: {
                h1: 'Helidonリアクティブ・エンジン',
                title: 'Helidonリアクティブ・エンジン',
                h1Prefix: 'SE',
                description: 'Dependency-less reactive operators',
                keywords: 'helidon, reactive, streams, multi, single',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivestreams-02_engine', '/se/reactivestreams/02_engine', {})
        },
        {
            path: '/se/reactivestreams/03_rsoperators',
            meta: {
                h1: 'リアクティブ・ストリーム・オペレータ',
                title: 'リアクティブ・ストリーム・オペレータ',
                h1Prefix: 'SE',
                description: 'MicroProfile Reactive Streams Operators support in Helidon SE',
                keywords: 'helidon, se, microprofile, reactivestreams',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivestreams-03_rsoperators', '/se/reactivestreams/03_rsoperators', {})
        },
        {
            path: '/se/reactivemessaging/01_introduction',
            meta: {
                h1: 'リアクティブ・メッセージング',
                title: 'リアクティブ・メッセージング',
                h1Prefix: 'SE',
                description: 'Reactive Messaging support in Helidon SE',
                keywords: 'helidon, se, messaging',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivemessaging-01_introduction', '/se/reactivemessaging/01_introduction', {})
        },
        {
            path: '/se/reactivemessaging/03_connector',
            meta: {
                h1: 'コネクタ',
                title: 'コネクタ',
                h1Prefix: 'SE',
                description: 'Reactive Messaging Connector in Helidon SE',
                keywords: 'helidon, se, messaging, connector',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivemessaging-03_connector', '/se/reactivemessaging/03_connector', {})
        },
        {
            path: '/se/reactivemessaging/04_kafka',
            meta: {
                h1: 'Kafkaコネクタ',
                title: 'Kafkaコネクタ',
                h1Prefix: 'SE',
                description: 'Reactive Messaging support for Kafka in Helidon SE',
                keywords: 'helidon, se, messaging, kafka',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivemessaging-04_kafka', '/se/reactivemessaging/04_kafka', {})
        },
        {
            path: '/se/reactivemessaging/05_jms',
            meta: {
                h1: 'JMSコネクタ',
                title: 'JMSコネクタ',
                h1Prefix: 'SE',
                description: 'Reactive Messaging support for JMS in Helidon SE',
                keywords: 'helidon, se, messaging, jms',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivemessaging-05_jms', '/se/reactivemessaging/05_jms', {})
        },
        {
            path: '/se/reactivemessaging/06_aq',
            meta: {
                h1: 'AQコネクタ',
                title: 'AQコネクタ',
                h1Prefix: 'SE',
                description: 'Reactive Messaging support for Oracle AQ in Helidon SE',
                keywords: 'helidon, se, messaging, jms, aq',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactivemessaging-06_aq', '/se/reactivemessaging/06_aq', {})
        },
        {
            path: '/se/webserver/01_introduction',
            meta: {
                h1: 'WebServer概要',
                title: 'WebServer概要',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer Introduction',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-01_introduction', '/se/webserver/01_introduction', {})
        },
        {
            path: '/se/webserver/02_configuration',
            meta: {
                h1: 'WebServerの構成',
                title: 'WebServerの構成',
                h1Prefix: 'SE',
                description: 'Helidon Reactive Webserver Configuration',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-02_configuration', '/se/webserver/02_configuration', {})
        },
        {
            path: '/se/webserver/03_routing',
            meta: {
                h1: 'ルーティング',
                title: 'ルーティング',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer Routing',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-03_routing', '/se/webserver/03_routing', {})
        },
        {
            path: '/se/webserver/04_request-handling',
            meta: {
                h1: 'リクエスト処理',
                title: 'リクエスト処理',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer request handling',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-04_request-handling', '/se/webserver/04_request-handling', {})
        },
        {
            path: '/se/webserver/05_error-handling',
            meta: {
                h1: 'エラー処理',
                title: 'エラー処理',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer error handling',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-05_error-handling', '/se/webserver/05_error-handling', {})
        },
        {
            path: '/se/webserver/06_static-content-support',
            meta: {
                h1: '静的コンテンツのサポート',
                title: '静的コンテンツのサポート',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer static content support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-06_static-content-support', '/se/webserver/06_static-content-support', {})
        },
        {
            path: '/se/webserver/07_jersey-support',
            meta: {
                h1: 'Jersey (JAX-RS)サポート',
                title: 'Jersey (JAX-RS)サポート',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer Jersey JAX-RS support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-07_jersey-support', '/se/webserver/07_jersey-support', {})
        },
        {
            path: '/se/webserver/08_json-support',
            meta: {
                h1: 'JSONのサポート',
                title: 'JSONのサポート',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer JSON support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-08_json-support', '/se/webserver/08_json-support', {})
        },
        {
            path: '/se/webserver/09_jsonb-support',
            meta: {
                h1: 'JSON-Bのサポート',
                title: 'JSON-Bのサポート',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer JSON-B support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-09_jsonb-support', '/se/webserver/09_jsonb-support', {})
        },
        {
            path: '/se/webserver/10_jackson-support',
            meta: {
                h1: 'Jacksonのサポート',
                title: 'Jacksonのサポート',
                h1Prefix: 'SE',
                description: 'Helidon Reactive WebServer Jackson support',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-10_jackson-support', '/se/webserver/10_jackson-support', {})
        },
        {
            path: '/se/webserver/11_access-log',
            meta: {
                h1: 'WebServerアクセス・ログ',
                title: 'WebServerアクセス・ログ',
                h1Prefix: 'SE',
                description: 'Helidon Reactive Webserver Access Log',
                keywords: 'helidon, webserver, access log',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-11_access-log', '/se/webserver/11_access-log', {})
        },
        {
            path: '/se/webserver/12_tls-configuration',
            meta: {
                h1: 'WebServer TLS構成',
                title: 'WebServer TLS構成',
                h1Prefix: 'SE',
                description: 'Helidon WebServer TLS configuration',
                keywords: 'helidon, reactive, reactive streams, reactive java, reactive webserver, tls',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-12_tls-configuration', '/se/webserver/12_tls-configuration', {})
        },
        {
            path: '/se/webserver/13_http-compression',
            meta: {
                h1: 'WebServer HTTP圧縮',
                title: 'WebServer HTTP圧縮',
                h1Prefix: 'SE',
                description: 'Helidon WebServer HTTP Compression',
                keywords: 'helidon, http, compression, http compression, webserver, reactive webserver',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver-13_http-compression', '/se/webserver/13_http-compression', {})
        },
        {
            path: '/se/security/01_introduction',
            meta: {
                h1: 'セキュリティの概要',
                title: 'セキュリティの概要',
                h1Prefix: 'SE',
                description: 'Helidon Security introduction',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-01_introduction', '/se/security/01_introduction', {})
        },
        {
            path: '/se/security/02_providers',
            meta: {
                h1: 'セキュリティ・プロバイダ',
                title: 'セキュリティ・プロバイダ',
                h1Prefix: 'SE',
                description: 'Helidon Security providers',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-02_providers', '/se/security/02_providers', {})
        },
        {
            path: '/se/security/03_containers-integration',
            meta: {
                h1: 'コンテナ統合',
                title: 'コンテナ統合',
                h1Prefix: 'SE',
                description: 'Helidon Security containers integration',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-03_containers-integration', '/se/security/03_containers-integration', {})
        },
        {
            path: '/se/security/04_tools',
            meta: {
                h1: 'セキュリティ・ツール',
                title: 'セキュリティ・ツール',
                h1Prefix: 'SE',
                description: 'Helidon Security Tools',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-04_tools', '/se/security/04_tools', {})
        },
        {
            path: '/se/security/05_extensibility',
            meta: {
                h1: 'セキュリティの強化',
                title: 'セキュリティの強化',
                h1Prefix: 'SE',
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-security-05_extensibility', '/se/security/05_extensibility', {})
        },
        {
            path: '/se/tracing/01_tracing',
            meta: {
                h1: 'トレース',
                title: 'トレース',
                h1Prefix: 'SE',
                description: 'Helidon Tracing Support',
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-tracing-01_tracing', '/se/tracing/01_tracing', {})
        },
        {
            path: '/se/tracing/02_zipkin',
            meta: {
                h1: 'Zipkinトレース',
                title: 'Zipkinトレース',
                h1Prefix: 'SE',
                description: 'Helidon Tracing Support',
                keywords: 'helidon, tracing, zipkin',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-tracing-02_zipkin', '/se/tracing/02_zipkin', {})
        },
        {
            path: '/se/tracing/03_jaeger',
            meta: {
                h1: 'Jaegerトレース',
                title: 'Jaegerトレース',
                h1Prefix: 'SE',
                description: 'Helidon Tracing Support',
                keywords: 'helidon, tracing, jaeger',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-tracing-03_jaeger', '/se/tracing/03_jaeger', {})
        },
        {
            path: '/se/webclient/01_introduction',
            meta: {
                h1: 'WebClient概要',
                title: 'WebClient概要',
                h1Prefix: 'SE',
                description: 'Helidon WebClient',
                keywords: 'helidon, se, rest, httpclient, webclient, reactive',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webclient-01_introduction', '/se/webclient/01_introduction', {})
        },
        {
            path: '/se/webclient/02_tls-configuration',
            meta: {
                h1: 'WebClient TLS構成',
                title: 'WebClient TLS構成',
                h1Prefix: 'SE',
                description: 'Helidon WebClient TLS configuration',
                keywords: 'helidon, se, rest, httpclient, webclient, reactive, tls',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webclient-02_tls-configuration', '/se/webclient/02_tls-configuration', {})
        },
        {
            path: '/se/websocket/01_overview',
            meta: {
                h1: 'WebSocket概要',
                title: 'WebSocket概要',
                h1Prefix: 'SE',
                description: 'Helidon WebSocket Introduction',
                keywords: 'helidon, webserver, websocket, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-websocket-01_overview', '/se/websocket/01_overview', {})
        },
        {
            path: '/se/aot/01_introduction',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'SE',
                description: 'Helidon AOT using GraalVM native-image',
                keywords: 'helidon, aot, native, native-image, image, executable, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-aot-01_introduction', '/se/aot/01_introduction', {})
        },
        {
            path: '/se/faulttolerance/01_faulttolerance',
            meta: {
                h1: 'Helidon SEでのフォルト・トレランス',
                title: 'Helidon SEでのフォルト・トレランス',
                h1Prefix: 'SE',
                description: 'Fault Tolerance in Helidon SE',
                keywords: 'helidon, java, fault, tolerance, fault tolerance, se',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-faulttolerance-01_faulttolerance', '/se/faulttolerance/01_faulttolerance', {})
        },
        {
            path: '/mp/introduction/01_introduction',
            meta: {
                h1: 'Helidon MPの概要',
                title: 'Helidon MPの概要',
                h1Prefix: 'MP',
                description: 'about Helidon MP',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-introduction-01_introduction', '/mp/introduction/01_introduction', {})
        },
        {
            path: '/mp/introduction/02_microprofile',
            meta: {
                h1: 'Helidon MicroProfile',
                title: 'Helidon MicroProfile',
                h1Prefix: 'MP',
                description: 'getting started with Helidon Microprofile',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-introduction-02_microprofile', '/mp/introduction/02_microprofile', {})
        },
        {
            path: '/mp/guides/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'MP',
                description: 'Helidon MP Guides',
                keywords: 'helidon, java, microservices, microprofile, guides',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-01_overview', '/mp/guides/01_overview', {})
        },
        {
            path: '/mp/guides/02_quickstart',
            meta: {
                h1: 'Helidon MPクイックスタート',
                title: 'Helidon MPクイックスタート',
                h1Prefix: 'MP',
                description: 'Helidon MP Quickstart guide',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-02_quickstart', '/mp/guides/02_quickstart', {})
        },
        {
            path: '/mp/guides/03_config',
            meta: {
                h1: 'Helidon MP構成ガイド',
                title: 'Helidon MP構成ガイド',
                h1Prefix: 'MP',
                description: 'Helidon configuration',
                keywords: 'helidon, configuration, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-03_config', '/mp/guides/03_config', {})
        },
        {
            path: '/mp/guides/04_health',
            meta: {
                h1: 'Helidon MPヘルス・チェック・ガイド',
                title: 'Helidon MPヘルス・チェック・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon health-checks',
                keywords: 'helidon, health-checks, health, check',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-04_health', '/mp/guides/04_health', {})
        },
        {
            path: '/mp/guides/05_metrics',
            meta: {
                h1: 'Helidon MPメトリクス・ガイド',
                title: 'Helidon MPメトリクス・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon metrics',
                keywords: 'helidon, metrics, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-05_metrics', '/mp/guides/05_metrics', {})
        },
        {
            path: '/mp/guides/05_security-oidc',
            meta: {
                h1: 'Helidon MP OIDCセキュリティ・プロバイダ',
                title: 'Helidon MP OIDCセキュリティ・プロバイダ',
                h1Prefix: 'MP',
                description: 'Helidon OIDC Security Provider guide',
                keywords: 'helidon, security, guide, oidc, provider',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-05_security-oidc', '/mp/guides/05_security-oidc', {})
        },
        {
            path: '/mp/guides/06_tracing',
            meta: {
                h1: 'Helidon MPトレース・ガイド',
                title: 'Helidon MPトレース・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon tracing',
                keywords: 'helidon, tracing, microprofile, guide',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-06_tracing', '/mp/guides/06_tracing', {})
        },
        {
            path: '/mp/guides/07_datasource',
            meta: {
                h1: 'Helidon MPデータ・ソース・ガイド',
                title: 'Helidon MPデータ・ソース・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP Data Source Guide',
                keywords: 'helidon, guide, datasource, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-07_datasource', '/mp/guides/07_datasource', {})
        },
        {
            path: '/mp/guides/08_jta',
            meta: {
                h1: 'Helidon MP JTAガイド',
                title: 'Helidon MP JTAガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP JTA Guide',
                keywords: 'helidon, guide, transaction, jta, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-08_jta', '/mp/guides/08_jta', {})
        },
        {
            path: '/mp/guides/09_jpa',
            meta: {
                h1: 'Helidon MP JPAガイド',
                title: 'Helidon MP JPAガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP JPA Guide',
                keywords: 'helidon, guide, transaction, jpa, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-09_jpa', '/mp/guides/09_jpa', {})
        },
        {
            path: '/mp/guides/10_mp-tutorial',
            meta: {
                h1: 'Helidon MPチュートリアル',
                title: 'Helidon MPチュートリアル',
                h1Prefix: 'MP',
                description: 'Helidon MP Tutorial',
                keywords: 'helidon',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-10_mp-tutorial', '/mp/guides/10_mp-tutorial', {})
        },
        {
            path: '/mp/guides/15_migration',
            meta: {
                h1: 'Helidon MPアップグレード・ガイド',
                title: 'Helidon MPアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-15_migration', '/mp/guides/15_migration', {})
        },
        {
            path: '/mp/guides/25_maven_build',
            meta: {
                h1: 'Mavenガイド',
                title: 'Mavenガイド',
                h1Prefix: 'MP',
                description: 'Helidon Maven Guide',
                keywords: 'helidon, guide, maven, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-25_maven_build', '/mp/guides/25_maven_build', {})
        },
        {
            path: '/mp/guides/26_gradle_build',
            meta: {
                h1: 'Gradleガイド',
                title: 'Gradleガイド',
                h1Prefix: 'MP',
                description: 'Helidon Gradle Guide',
                keywords: 'helidon, guide, gradle, build',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-26_gradle_build', '/mp/guides/26_gradle_build', {})
        },
        {
            path: '/mp/guides/36_graalnative',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon Native Image',
                keywords: 'helidon, guide, graalvm, native-image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-36_graalnative', '/mp/guides/36_graalnative', {})
        },
        {
            path: '/mp/guides/37_jlink_image',
            meta: {
                h1: '`jlink`を使用したカスタム・ランタイム・イメージ',
                title: '`jlink`を使用したカスタム・ランタイム・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon Custom Runtime Images',
                keywords: 'helidon, guide, jlink, image',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-guides-37_jlink_image', '/mp/guides/37_jlink_image', {})
        },
        {
            path: '/mp/config/01_introduction',
            meta: {
                h1: 'MicroProfile構成',
                title: 'MicroProfile構成',
                h1Prefix: 'MP',
                description: 'MicroProfile Config support in Helidon MP',
                keywords: 'helidon, mp, microprofile, config, encryption, reference',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-config-01_introduction', '/mp/config/01_introduction', {})
        },
        {
            path: '/mp/config/02_MP_config_sources',
            meta: {
                h1: 'マイクロプロファイル構成ソース',
                title: 'マイクロプロファイル構成ソース',
                h1Prefix: 'MP',
                description: 'MicroProfile Config Sources',
                keywords: 'helidon, mp, ordinal, mpconfig, yamlmpconfig',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-config-02_MP_config_sources', '/mp/config/02_MP_config_sources', {})
        },
        {
            path: '/mp/extensions/01_overview',
            meta: {
                h1: '拡張機能の概要',
                title: '拡張機能の概要',
                h1Prefix: 'MP',
                description: 'Helidon extensions',
                keywords: 'helidon, java, microservices, microprofile, extensions',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-01_overview', '/mp/extensions/01_overview', {})
        },
        {
            path: '/mp/extensions/02_cdi_datasource-hikaricp',
            meta: {
                h1: 'HikariCPのCDI拡張機能',
                title: 'HikariCPのCDI拡張機能',
                h1Prefix: 'MP',
                description: 'Helidon CDI extension for HikariCP',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, hikaricp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-02_cdi_datasource-hikaricp', '/mp/extensions/02_cdi_datasource-hikaricp', {})
        },
        {
            path: '/mp/extensions/02_cdi_datasource-ucp',
            meta: {
                h1: 'Oracle UCPのCDI拡張機能',
                title: 'Oracle UCPのCDI拡張機能',
                h1Prefix: 'MP',
                description: 'Helidon CDI extension for Oracle Universal Connection Pool',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, ucp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-02_cdi_datasource-ucp', '/mp/extensions/02_cdi_datasource-ucp', {})
        },
        {
            path: '/mp/extensions/03_cdi_jedis',
            meta: {
                h1: 'JedisのCDI拡張機能',
                title: 'JedisのCDI拡張機能',
                h1Prefix: 'MP',
                description: 'Helidon CDI extension for Jedis',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, jedis, redis',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-03_cdi_jedis', '/mp/extensions/03_cdi_jedis', {})
        },
        {
            path: '/mp/extensions/04_cdi_oci-objectstorage',
            meta: {
                h1: 'OCIオブジェクト・ストレージのCDI拡張機能',
                title: 'OCIオブジェクト・ストレージのCDI拡張機能',
                h1Prefix: 'MP',
                description: 'Helidon CDI extension for HikariCP',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, oci, object storage',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-04_cdi_oci-objectstorage', '/mp/extensions/04_cdi_oci-objectstorage', {})
        },
        {
            path: '/mp/extensions/05_cdi_jta',
            meta: {
                h1: 'JTAのCDI拡張機能',
                title: 'JTAのCDI拡張機能',
                h1Prefix: 'MP',
                description: 'Helidon CDI extension for JTA',
                keywords: 'helidon, java, microservices, microprofile, extensions, cdi, jta',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-extensions-05_cdi_jta', '/mp/extensions/05_cdi_jta', {})
        },
        {
            path: '/mp/cors/01_introduction',
            meta: {
                h1: 'Helidon MPのCORSについて',
                title: 'Helidon MPのCORSについて',
                h1Prefix: 'MP',
                description: 'Introduction to CORS in Helidon MP',
                keywords: 'helidon, java, cors, mp, microprofile, cross-origin resource sharing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-cors-01_introduction', '/mp/cors/01_introduction', {})
        },
        {
            path: '/mp/cors/02_using-cors',
            meta: {
                h1: 'Helidon MP CORS APIの使用',
                title: 'Helidon MP CORS APIの使用',
                h1Prefix: 'MP',
                description: 'Using the Helidon MP CORS API',
                keywords: 'helidon, java, cors, mp, microprofile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-cors-02_using-cors', '/mp/cors/02_using-cors', {})
        },
        {
            path: '/mp/cors/03_configuration-with-cors-mp',
            meta: {
                h1: 'Helidon MPでのCORSによる構成の使用',
                title: 'Helidon MPでのCORSによる構成の使用',
                h1Prefix: 'MP',
                description: 'Helidon MP CORS Configuration',
                keywords: 'helidon, java, cors, mp, microprofile, configuration',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-cors-03_configuration-with-cors-mp', '/mp/cors/03_configuration-with-cors-mp', {})
        },
        {
            path: '/mp/cors/04_support-in-builtin-services',
            meta: {
                h1: 'Helidon MP組込みサービスでのCORSの使用',
                title: 'Helidon MP組込みサービスでのCORSの使用',
                h1Prefix: 'MP',
                description: 'Helidon MP CORS Support in Built-in Services',
                keywords: 'helidon, java, cors, mp, services',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-cors-04_support-in-builtin-services', '/mp/cors/04_support-in-builtin-services', {})
        },
        {
            path: '/mp/faulttolerance/01_overview',
            meta: {
                h1: 'フォルト・トレランスの概要',
                title: 'フォルト・トレランスの概要',
                h1Prefix: 'MP',
                description: 'Fault Tolerance Introduction',
                keywords: 'helidon, webserver, faulttolerance, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-faulttolerance-01_overview', '/mp/faulttolerance/01_overview', {})
        },
        {
            path: '/mp/grpc/01_mp_server_side_services',
            meta: {
                h1: 'gRPC MicroProfileサーバー・サービス',
                title: 'gRPC MicroProfileサーバー・サービス',
                h1Prefix: 'MP',
                description: 'Helidon gRPC MicroProfile Server-Side Services',
                keywords: 'helidon, grpc, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-grpc-01_mp_server_side_services', '/mp/grpc/01_mp_server_side_services', {})
        },
        {
            path: '/mp/grpc/02_mp_clients',
            meta: {
                h1: 'gRPC MicroProfileクライアント',
                title: 'gRPC MicroProfileクライアント',
                h1Prefix: 'MP',
                description: 'Building Helidon gRPC MicroProfile Clients',
                keywords: 'helidon, grpc, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-grpc-02_mp_clients', '/mp/grpc/02_mp_clients', {})
        },
        {
            path: '/mp/graphql/01_mp_graphql',
            meta: {
                h1: 'MicroProfile GraphQL',
                title: 'MicroProfile GraphQL',
                h1Prefix: 'MP',
                description: 'Helidon GraphQL MicroProfile',
                keywords: 'helidon, graphql, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-graphql-01_mp_graphql', '/mp/graphql/01_mp_graphql', {})
        },
        {
            path: '/mp/health/01_introduction',
            meta: {
                h1: 'MicroProfile Health',
                title: 'MicroProfile Health',
                h1Prefix: 'MP',
                description: 'MicroProfile Health support in Helidon MP',
                keywords: 'helidon, mp, microprofile, health',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-health-01_introduction', '/mp/health/01_introduction', {})
        },
        {
            path: '/mp/jaxrs/02_server-configuration',
            meta: {
                h1: 'サーバーの構成',
                title: 'サーバーの構成',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile server configuration',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-02_server-configuration', '/mp/jaxrs/02_server-configuration', {})
        },
        {
            path: '/mp/jaxrs/03_application-configuration',
            meta: {
                h1: 'アプリケーションの構成',
                title: 'アプリケーションの構成',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile application configuration',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-03_application-configuration', '/mp/jaxrs/03_application-configuration', {})
        },
        {
            path: '/mp/jaxrs/04_static-content',
            meta: {
                h1: '静的コンテンツの提供',
                title: '静的コンテンツの提供',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile static content',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-04_static-content', '/mp/jaxrs/04_static-content', {})
        },
        {
            path: '/mp/jaxrs/10_reactive-routing',
            meta: {
                h1: 'Helidon MPのリアクティブ・ルーティング',
                title: 'Helidon MPのリアクティブ・ルーティング',
                h1Prefix: 'MP',
                description: 'Helidon MP reactive routing',
                keywords: 'helidon, rest, reactive, WebServer, route, routing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-10_reactive-routing', '/mp/jaxrs/10_reactive-routing', {})
        },
        {
            path: '/mp/jpa/01_introduction',
            meta: {
                h1: 'Helidon MP JPA',
                title: 'Helidon MP JPA',
                h1Prefix: 'MP',
                description: 'Jakarta Persistence support in Helidon MP',
                keywords: 'helidon, mp, microprofile, persistence, database',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jpa-01_introduction', '/mp/jpa/01_introduction', {})
        },
        {
            path: '/mp/jwtauth/01_introduction',
            meta: {
                h1: 'JWT認証',
                title: 'JWT認証',
                h1Prefix: 'MP',
                description: 'MicroProfile JWT Auth support in Helidon MP',
                keywords: 'helidon, mp, microprofile, security, jwt',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jwtauth-01_introduction', '/mp/jwtauth/01_introduction', {})
        },
        {
            path: '/mp/metrics/01_introduction',
            meta: {
                h1: 'メトリクス',
                title: 'メトリクス',
                h1Prefix: 'MP',
                description: 'MicroProfile Metrics support in Helidon MP',
                keywords: 'helidon, mp, microprofile, metrics',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-metrics-01_introduction', '/mp/metrics/01_introduction', {})
        },
        {
            path: '/mp/openapi/01_openapi',
            meta: {
                h1: 'OpenAPI',
                title: 'OpenAPI',
                h1Prefix: 'MP',
                description: 'Helidon MP OpenAPI Support',
                keywords: 'helidon, mp, microprofile, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-openapi-01_openapi', '/mp/openapi/01_openapi', {})
        },
        {
            path: '/mp/reactivestreams/01_overview',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'MP',
                description: 'Reactive Streams support in Helidon',
                keywords: 'helidon, mp, microprofile, reactivestreams',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivestreams-01_overview', '/mp/reactivestreams/01_overview', {})
        },
        {
            path: '/mp/reactivestreams/02_engine',
            meta: {
                h1: 'Helidonリアクティブ・エンジン',
                title: 'Helidonリアクティブ・エンジン',
                h1Prefix: 'MP',
                description: 'Dependecy-less reactive operators',
                keywords: 'helidon, reactive, streams, multi, single',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivestreams-02_engine', '/mp/reactivestreams/02_engine', {})
        },
        {
            path: '/mp/reactivestreams/03_rsoperators',
            meta: {
                h1: 'リアクティブ・ストリーム・オペレータ',
                title: 'リアクティブ・ストリーム・オペレータ',
                h1Prefix: 'MP',
                description: 'MicroProfile Reactive Streams Operators support in Helidon MP',
                keywords: 'helidon, mp, microprofile, reactivestreams',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivestreams-03_rsoperators', '/mp/reactivestreams/03_rsoperators', {})
        },
        {
            path: '/mp/reactivemessaging/01_introduction',
            meta: {
                h1: 'リアクティブ・メッセージング',
                title: 'リアクティブ・メッセージング',
                h1Prefix: 'MP',
                description: 'MicroProfile Reactive Messaging support in Helidon MP',
                keywords: 'helidon, mp, microprofile, messaging',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-01_introduction', '/mp/reactivemessaging/01_introduction', {})
        },
        {
            path: '/mp/reactivemessaging/02_message',
            meta: {
                h1: 'メッセージ',
                title: 'メッセージ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging Message in Helidon MP',
                keywords: 'helidon, mp, messaging, message',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-02_message', '/mp/reactivemessaging/02_message', {})
        },
        {
            path: '/mp/reactivemessaging/03_connector',
            meta: {
                h1: 'コネクタ',
                title: 'コネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging Connector in Helidon MP',
                keywords: 'helidon, mp, messaging, connector',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-03_connector', '/mp/reactivemessaging/03_connector', {})
        },
        {
            path: '/mp/reactivemessaging/04_kafka',
            meta: {
                h1: 'Kafkaコネクタ',
                title: 'Kafkaコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for Kafka in Helidon MP',
                keywords: 'helidon, mp, messaging, kafka',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-04_kafka', '/mp/reactivemessaging/04_kafka', {})
        },
        {
            path: '/mp/reactivemessaging/05_jms',
            meta: {
                h1: 'JMSコネクタ',
                title: 'JMSコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for JMS in Helidon MP',
                keywords: 'helidon, mp, messaging, jms',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-05_jms', '/mp/reactivemessaging/05_jms', {})
        },
        {
            path: '/mp/reactivemessaging/06_aq',
            meta: {
                h1: 'Oracle AQコネクタ',
                title: 'Oracle AQコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for Oracle AQ in Helidon MP',
                keywords: 'helidon, mp, messaging, jms, aq',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-06_aq', '/mp/reactivemessaging/06_aq', {})
        },
        {
            path: '/mp/restclient/09_rest-client',
            meta: {
                h1: 'Restクライアント',
                title: 'Restクライアント',
                h1Prefix: 'MP',
                description: 'Helidon MP Rest Client',
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-restclient-09_rest-client', '/mp/restclient/09_rest-client', {})
        },
        {
            path: '/mp/security/01_security',
            meta: {
                h1: 'セキュリティの追加',
                title: 'セキュリティの追加',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile security',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-01_security', '/mp/security/01_security', {})
        },
        {
            path: '/mp/security/02_providers',
            meta: {
                h1: 'セキュリティ・プロバイダ',
                title: 'セキュリティ・プロバイダ',
                h1Prefix: 'MP',
                description: 'Helidon Security providers',
                keywords: 'helidon, security',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-02_providers', '/mp/security/02_providers', {})
        },
        {
            path: '/mp/security/03_configuration-secrets',
            meta: {
                h1: '構成シークレット',
                title: '構成シークレット',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile configuration secrets',
                keywords: 'helidon, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-security-03_configuration-secrets', '/mp/security/03_configuration-secrets', {})
        },
        {
            path: '/mp/tracing/01_tracing',
            meta: {
                h1: 'トレース',
                title: 'トレース',
                h1Prefix: 'MP',
                description: 'Helidon MP Tracing Support',
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-tracing-01_tracing', '/mp/tracing/01_tracing', {})
        },
        {
            path: '/mp/tracing/02_zipkin',
            meta: {
                h1: 'Zipkinトレース',
                title: 'Zipkinトレース',
                h1Prefix: 'MP',
                description: 'Helidon Tracing Support',
                keywords: 'helidon, tracing, zipkin',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-tracing-02_zipkin', '/mp/tracing/02_zipkin', {})
        },
        {
            path: '/mp/tracing/03_jaeger',
            meta: {
                h1: 'Jaegerトレース',
                title: 'Jaegerトレース',
                h1Prefix: 'MP',
                description: 'Helidon Tracing Support',
                keywords: 'helidon, tracing, jaeger',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-tracing-03_jaeger', '/mp/tracing/03_jaeger', {})
        },
        {
            path: '/mp/websocket/01_overview',
            meta: {
                h1: 'WebSocket概要',
                title: 'WebSocket概要',
                h1Prefix: 'MP',
                description: 'Helidon WebSocket Introduction',
                keywords: 'helidon, webserver, websocket, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-websocket-01_overview', '/mp/websocket/01_overview', {})
        },
        {
            path: '/mp/aot/01_introduction',
            meta: {
                h1: 'GraalVMネイティブ・イメージ',
                title: 'GraalVMネイティブ・イメージ',
                h1Prefix: 'MP',
                description: 'Helidon AOT using GraalVM native-image',
                keywords: 'helidon, aot, native, native-image, image, executable, mp',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-aot-01_introduction', '/mp/aot/01_introduction', {})
        },
        {
            path: '/mp/testing/01_testing',
            meta: {
                h1: 'JUnit5でのテスト',
                title: 'JUnit5でのテスト',
                h1Prefix: 'MP',
                description: 'Helidon Testing',
                keywords: 'helidon, mp, test, testing',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-testing-01_testing', '/mp/testing/01_testing', {})
        },
        {
            path: '/guides/34_Oracle_Kubernetes',
            meta: {
                h1: 'OKEへのデプロイ',
                title: 'OKEへのデプロイ',
                h1Prefix: null,
                description: 'Helidon Oracle Container Engine for Kubernetes (OKE) Guide',
                keywords: 'helidon, guide, oracle, kubernetes',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('guides-34_Oracle_Kubernetes', '/guides/34_Oracle_Kubernetes', {})
        },
        {
            path: '/guides/32_jib',
            meta: {
                h1: 'Jibを使用したコンテナ・イメージのビルド',
                title: 'Jibを使用したコンテナ・イメージのビルド',
                h1Prefix: null,
                description: 'Helidon Jib Guide',
                keywords: 'helidon, guide, docker, jib',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('guides-32_jib', '/guides/32_jib', {})
        },
        {
            path: '/community/01_community',
            meta: {
                h1: 'コミュニティ',
                title: 'コミュニティ',
                h1Prefix: null,
                description: 'Helidon community',
                keywords: 'helidon, community, slack, github, twitter, blog',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('community-01_community', '/community/01_community', {})
        },
        {
            path: '/mp/cors/hide_why-options',
            meta: {
                h1: 'なぜ`@OPTIONS`?',
                title: 'なぜ`@OPTIONS`?',
                h1Prefix: 'MP',
                description: 'Exploration of why Helidon MP associates the `@CrossOrigin` annotation with `@OPTIONS` methods.',
                keywords: 'helidon, java, cors, mp, microprofile, jax-rs cross-origin resource sharing',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-cors-hide_why-options', '/mp/cors/hide_why-options', {})
        },
        {
            path: '/', redirect: '/about/01_overview'
        },
        {
            path: '*', redirect: '/'
        }
    ];
}
function createNav(){
    return [
        {
            groups: [
                {
                    title: '導入',
                    group: '/about',
                    items: [
                        {
                            title: '情報',
                            action: 'assistant',
                            group: '/about',
                            items: [
                                { href: '/about/01_overview', title: '概要' },
                                { href: '/about/02_introduction', title: 'Helidonについて' },
                                { href: '/about/03_prerequisites', title: '開始' },
                                { href: '/about/04_managing-dependencies', title: '依存関係の管理' },
                                { href: '/about/05_cli', title: 'Helidon CLI' },
                                { href: '/about/05_kubernetes', title: 'デスクトップ上のKubernetes' },
                                { href: '/about/10_upgrade', title: '1.4からのアップグレード' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Helidon SE',
                    group: '/se',
                    items: [
                        {
                            title: '導入',
                            action: 'widgets',
                            group: '/se/introduction',
                            items: [
                                { href: '/se/introduction/01_introduction', title: 'Helidon SE' }
                            ]
                        },
                        {
                            title: 'ガイド',
                            action: 'explore',
                            group: '/se/guides',
                            items: [
                                { href: '/se/guides/01_overview', title: '概要' },
                                { href: '/se/guides/02_quickstart', title: 'Helidon SEクイックスタート' },
                                { href: '/se/guides/03_config', title: 'Helidon SE構成ガイド' },
                                { href: '/se/guides/04_health', title: 'Helidon SEヘルス・チェック・ガイド' },
                                { href: '/se/guides/05_metrics', title: 'Helidon SEメトリクス・ガイド' },
                                { href: '/se/guides/05_security_oidc', title: 'Helidon SE OIDCセキュリティ・プロバイダ・ガイド' },
                                { href: '/se/guides/06_tracing', title: 'Helidon SEトレース・ガイド' },
                                { href: '/se/guides/15_migration', title: 'Helidon SEアップグレード・ガイド' },
                                { href: '/se/guides/25_maven_build', title: 'Mavenガイド' },
                                { href: '/se/guides/26_gradle_build', title: 'Gradleガイド' },
                                { href: '/se/guides/36_graalnative', title: 'GraalVMネイティブ・イメージ' },
                                { href: '/se/guides/37_jlink_image', title: '`jlink`を使用したカスタム・ランタイム・イメージ' }
                            ]
                        },
                        {
                            title: '構成',
                            action: 'settings',
                            group: '/se/config',
                            items: [
                                { href: '/se/config/01_introduction', title: '構成コンポーネント' },
                                { href: '/se/config/02_config-sources', title: '構成のロード: 構成ソースおよびパーサー' },
                                { href: '/se/config/03_hierarchical-features', title: '階層機能' },
                                { href: '/se/config/04_property-mapping', title: 'プロパティ・マッピング' },
                                { href: '/se/config/05_mutability-support', title: '可変性のサポート' },
                                { href: '/se/config/06_advanced-configuration', title: '拡張構成のトピック' },
                                { href: '/se/config/07_extensions', title: '拡張' },
                                { href: '/se/config/08_supported-formats', title: 'サポートされているその他の形式およびソース' }
                            ]
                        },
                        {
                            title: 'CORS',
                            action: 'share',
                            group: '/se/cors',
                            items: [
                                { href: '/se/cors/01_introduction', title: 'Helidon SEのCORSについて' },
                                { href: '/se/cors/02_using-the-api', title: 'Helidon SE CORS APIの使用' },
                                { href: '/se/cors/03_using-configuration', title: 'CORSの構成の使用' },
                                { href: '/se/cors/04_support-in-builtin-services', title: '組込みサービスでのCORSの使用' }
                            ]
                        },
                        {
                            title: 'DBクライアント',
                            action: 'storage',
                            group: '/se/dbclient',
                            items: [
                                { href: '/se/dbclient/01_introduction', title: 'Helidon DBクライアントについて' }
                            ]
                        },
                        {
                            title: 'gRPCサーバー',
                            action: 'swap_horiz',
                            group: '/se/grpc',
                            items: [
                                { href: '/se/grpc/01_introduction', title: 'gRPCサーバーの概要' },
                                { href: '/se/grpc/02_configuration', title: 'gRPCサーバー構成' },
                                { href: '/se/grpc/03_routing', title: 'gRPCサーバーのルーティング' },
                                { href: '/se/grpc/04_service_implementation', title: 'gRPCサービスの実装' },
                                { href: '/se/grpc/05_interceptors', title: 'gRPCインターセプタ' },
                                { href: '/se/grpc/06_health_checks', title: 'gRPCサービス・ヘルス・チェック' },
                                { href: '/se/grpc/07_metrics', title: 'gRPCサービス・メトリクス' },
                                { href: '/se/grpc/08_security', title: 'gRPCサーバー・セキュリティ' },
                                { href: '/se/grpc/21_client_introduction', title: 'gRPCクライアントの概要' },
                                { href: '/se/grpc/22_client_configuration', title: 'gRPCクライアント構成' },
                                { href: '/se/grpc/23_client_implementation', title: 'gRPCクライアント実装' }
                            ]
                        },
                        {
                            title: 'GraphQLサーバー',
                            action: 'graphic_eq',
                            group: '/se/graphql',
                            items: [
                                { href: '/se/graphql/01_introduction', title: 'GraphQLサーバーの概要' }
                            ]
                        },
                        {
                            title: 'ヘルス・チェック',
                            action: 'favorite_outline',
                            group: '/se/health',
                            items: [
                                { href: '/se/health/01_health', title: 'ヘルス・チェック' },
                                { href: '/se/health/02_health_in_k8s', title: 'Kubernetesプローブ' }
                            ]
                        },
                        {
                            title: 'メトリクス',
                            action: 'av_timer',
                            group: '/se/metrics',
                            items: [
                                { href: '/se/metrics/01_metrics', title: 'メトリクス' },
                                { href: '/se/metrics/02_prometheus', title: 'Prometheusメトリクス' }
                            ]
                        },
                        {
                            title: 'OpenAPI',
                            action: 'donut_large',
                            group: '/se/openapi',
                            items: [
                                { href: '/se/openapi/01_openapi', title: 'SEのOpenAPI' }
                            ]
                        },
                        {
                            title: 'リアクティブ・ストリーム',
                            action: 'waves',
                            group: '/se/reactivestreams',
                            items: [
                                { href: '/se/reactivestreams/01_overview', title: '概要' },
                                { href: '/se/reactivestreams/02_engine', title: 'Helidonリアクティブ・エンジン' },
                                { href: '/se/reactivestreams/03_rsoperators', title: 'リアクティブ・ストリーム・オペレータ' }
                            ]
                        },
                        {
                            title: 'リアクティブ・メッセージング',
                            action: 'message',
                            group: '/se/reactivemessaging',
                            items: [
                                { href: '/se/reactivemessaging/01_introduction', title: 'リアクティブ・メッセージング' },
                                { href: '/se/reactivemessaging/03_connector', title: 'コネクタ' },
                                { href: '/se/reactivemessaging/04_kafka', title: 'Kafkaコネクタ' },
                                { href: '/se/reactivemessaging/05_jms', title: 'JMSコネクタ' },
                                { href: '/se/reactivemessaging/06_aq', title: 'AQコネクタ' }
                            ]
                        },
                        {
                            title: 'リアクティブWebサーバー',
                            action: 'settings_ethernet',
                            group: '/se/webserver',
                            items: [
                                { href: '/se/webserver/01_introduction', title: 'WebServer概要' },
                                { href: '/se/webserver/02_configuration', title: 'WebServerの構成' },
                                { href: '/se/webserver/03_routing', title: 'ルーティング' },
                                { href: '/se/webserver/04_request-handling', title: 'リクエスト処理' },
                                { href: '/se/webserver/05_error-handling', title: 'エラー処理' },
                                { href: '/se/webserver/06_static-content-support', title: '静的コンテンツのサポート' },
                                { href: '/se/webserver/07_jersey-support', title: 'Jersey (JAX-RS)サポート' },
                                { href: '/se/webserver/08_json-support', title: 'JSONのサポート' },
                                { href: '/se/webserver/09_jsonb-support', title: 'JSON-Bのサポート' },
                                { href: '/se/webserver/10_jackson-support', title: 'Jacksonのサポート' },
                                { href: '/se/webserver/11_access-log', title: 'WebServerアクセス・ログ' },
                                { href: '/se/webserver/12_tls-configuration', title: 'WebServer TLS構成' },
                                { href: '/se/webserver/13_http-compression', title: 'WebServer HTTP圧縮' }
                            ]
                        },
                        {
                            title: 'セキュリティ',
                            action: 'security',
                            group: '/se/security',
                            items: [
                                { href: '/se/security/01_introduction', title: 'セキュリティの概要' },
                                { href: '/se/security/02_providers', title: 'セキュリティ・プロバイダ' },
                                { href: '/se/security/03_containers-integration', title: 'コンテナ統合' },
                                { href: '/se/security/04_tools', title: 'セキュリティ・ツール' },
                                { href: '/se/security/05_extensibility', title: 'セキュリティの強化' }
                            ]
                        },
                        {
                            title: 'トレース',
                            action: 'timeline',
                            group: '/se/tracing',
                            items: [
                                { href: '/se/tracing/01_tracing', title: 'トレース' },
                                { href: '/se/tracing/02_zipkin', title: 'Zipkinトレース' },
                                { href: '/se/tracing/03_jaeger', title: 'Jaegerトレース' }
                            ]
                        },
                        {
                            title: 'Webクライアント',
                            action: 'http',
                            group: '/se/webclient',
                            items: [
                                { href: '/se/webclient/01_introduction', title: 'WebClient概要' },
                                { href: '/se/webclient/02_tls-configuration', title: 'WebClient TLS構成' }
                            ]
                        },
                        {
                            title: 'Websocket',
                            action: 'timeline',
                            group: '/se/websocket',
                            items: [
                                { href: '/se/websocket/01_overview', title: 'WebSocket概要' }
                            ]
                        },
                        {
                            title: 'AOT',
                            action: 'save',
                            group: '/se/aot',
                            items: [
                                { href: '/se/aot/01_introduction', title: 'GraalVMネイティブ・イメージ' }
                            ]
                        },
                        {
                            title: 'フォルト・トレランス',
                            action: 'warning',
                            group: '/se/faulttolerance',
                            items: [
                                { href: '/se/faulttolerance/01_faulttolerance', title: 'Helidon SEでのフォルト・トレランス' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Helidon MP',
                    group: '/mp',
                    items: [
                        {
                            title: '導入',
                            action: 'widgets',
                            group: '/mp/introduction',
                            items: [
                                { href: '/mp/introduction/01_introduction', title: 'Helidon MPの概要' },
                                { href: '/mp/introduction/02_microprofile', title: 'Helidon MicroProfile' }
                            ]
                        },
                        {
                            title: 'ガイド',
                            action: 'explore',
                            group: '/mp/guides',
                            items: [
                                { href: '/mp/guides/01_overview', title: '概要' },
                                { href: '/mp/guides/02_quickstart', title: 'Helidon MPクイックスタート' },
                                { href: '/mp/guides/03_config', title: 'Helidon MP構成ガイド' },
                                { href: '/mp/guides/04_health', title: 'Helidon MPヘルス・チェック・ガイド' },
                                { href: '/mp/guides/05_metrics', title: 'Helidon MPメトリクス・ガイド' },
                                { href: '/mp/guides/05_security-oidc', title: 'Helidon MP OIDCセキュリティ・プロバイダ' },
                                { href: '/mp/guides/06_tracing', title: 'Helidon MPトレース・ガイド' },
                                { href: '/mp/guides/07_datasource', title: 'Helidon MPデータ・ソース・ガイド' },
                                { href: '/mp/guides/08_jta', title: 'Helidon MP JTAガイド' },
                                { href: '/mp/guides/09_jpa', title: 'Helidon MP JPAガイド' },
                                { href: '/mp/guides/10_mp-tutorial', title: 'Helidon MPチュートリアル' },
                                { href: '/mp/guides/15_migration', title: 'Helidon MPアップグレード・ガイド' },
                                { href: '/mp/guides/25_maven_build', title: 'Mavenガイド' },
                                { href: '/mp/guides/26_gradle_build', title: 'Gradleガイド' },
                                { href: '/mp/guides/36_graalnative', title: 'GraalVMネイティブ・イメージ' },
                                { href: '/mp/guides/37_jlink_image', title: '`jlink`を使用したカスタム・ランタイム・イメージ' }
                            ]
                        },
                        {
                            title: '構成',
                            action: 'settings',
                            group: '/mp/config',
                            items: [
                                { href: '/mp/config/01_introduction', title: 'MicroProfile構成' },
                                { href: '/mp/config/02_MP_config_sources', title: 'マイクロプロファイル構成ソース' }
                            ]
                        },
                        {
                            title: 'CDI拡張機能',
                            action: 'extension',
                            group: '/mp/extensions',
                            items: [
                                { href: '/mp/extensions/01_overview', title: '拡張機能の概要' },
                                { href: '/mp/extensions/02_cdi_datasource-hikaricp', title: 'HikariCPのCDI拡張機能' },
                                { href: '/mp/extensions/02_cdi_datasource-ucp', title: 'Oracle UCPのCDI拡張機能' },
                                { href: '/mp/extensions/03_cdi_jedis', title: 'JedisのCDI拡張機能' },
                                { href: '/mp/extensions/04_cdi_oci-objectstorage', title: 'OCIオブジェクト・ストレージのCDI拡張機能' },
                                { href: '/mp/extensions/05_cdi_jta', title: 'JTAのCDI拡張機能' }
                            ]
                        },
                        {
                            title: 'CORS',
                            action: 'share',
                            group: '/mp/cors',
                            items: [
                                { href: '/mp/cors/01_introduction', title: 'Helidon MPのCORSについて' },
                                { href: '/mp/cors/02_using-cors', title: 'Helidon MP CORS APIの使用' },
                                { href: '/mp/cors/03_configuration-with-cors-mp', title: 'Helidon MPでのCORSによる構成の使用' },
                                { href: '/mp/cors/04_support-in-builtin-services', title: 'Helidon MP組込みサービスでのCORSの使用' }
                            ]
                        },
                        {
                            title: 'フォルト・トレランス',
                            action: 'warning',
                            group: '/mp/faulttolerance',
                            items: [
                                { href: '/mp/faulttolerance/01_overview', title: 'フォルト・トレランスの概要' }
                            ]
                        },
                        {
                            title: 'gRPCサーバー',
                            action: 'swap_horiz',
                            group: '/mp/grpc',
                            items: [
                                { href: '/mp/grpc/01_mp_server_side_services', title: 'gRPC MicroProfileサーバー・サービス' },
                                { href: '/mp/grpc/02_mp_clients', title: 'gRPC MicroProfileクライアント' }
                            ]
                        },
                        {
                            title: 'GraphQL',
                            action: 'graphic_eq',
                            group: '/mp/graphql',
                            items: [
                                { href: '/mp/graphql/01_mp_graphql', title: 'MicroProfile GraphQL' }
                            ]
                        },
                        {
                            title: 'ヘルス・チェック',
                            action: 'favorite_outline',
                            group: '/mp/health',
                            items: [
                                { href: '/mp/health/01_introduction', title: 'MicroProfile Health' }
                            ]
                        },
                        {
                            title: 'JAX-RS/Jersey',
                            action: 'settings_ethernet',
                            group: '/mp/jaxrs',
                            items: [
                                { href: '/mp/jaxrs/02_server-configuration', title: 'サーバーの構成' },
                                { href: '/mp/jaxrs/03_application-configuration', title: 'アプリケーションの構成' },
                                { href: '/mp/jaxrs/04_static-content', title: '静的コンテンツの提供' },
                                { href: '/mp/jaxrs/10_reactive-routing', title: 'Helidon MPのリアクティブ・ルーティング' }
                            ]
                        },
                        {
                            title: 'JPA',
                            action: 'dns',
                            group: '/mp/jpa',
                            items: [
                                { href: '/mp/jpa/01_introduction', title: 'Helidon MP JPA' }
                            ]
                        },
                        {
                            title: 'JWT認証',
                            action: 'verified_user',
                            group: '/mp/jwtauth',
                            items: [
                                { href: '/mp/jwtauth/01_introduction', title: 'JWT認証' }
                            ]
                        },
                        {
                            title: 'メトリクス',
                            action: 'av_timer',
                            group: '/mp/metrics',
                            items: [
                                { href: '/mp/metrics/01_introduction', title: 'メトリクス' }
                            ]
                        },
                        {
                            title: 'OpenAPI',
                            action: 'donut_large',
                            group: '/mp/openapi',
                            items: [
                                { href: '/mp/openapi/01_openapi', title: 'OpenAPI' }
                            ]
                        },
                        {
                            title: 'リアクティブ・ストリーム',
                            action: 'waves',
                            group: '/mp/reactivestreams',
                            items: [
                                { href: '/mp/reactivestreams/01_overview', title: '概要' },
                                { href: '/mp/reactivestreams/02_engine', title: 'Helidonリアクティブ・エンジン' },
                                { href: '/mp/reactivestreams/03_rsoperators', title: 'リアクティブ・ストリーム・オペレータ' }
                            ]
                        },
                        {
                            title: 'リアクティブ・メッセージング',
                            action: 'message',
                            group: '/mp/reactivemessaging',
                            items: [
                                { href: '/mp/reactivemessaging/01_introduction', title: 'リアクティブ・メッセージング' },
                                { href: '/mp/reactivemessaging/02_message', title: 'メッセージ' },
                                { href: '/mp/reactivemessaging/03_connector', title: 'コネクタ' },
                                { href: '/mp/reactivemessaging/04_kafka', title: 'Kafkaコネクタ' },
                                { href: '/mp/reactivemessaging/05_jms', title: 'JMSコネクタ' },
                                { href: '/mp/reactivemessaging/06_aq', title: 'Oracle AQコネクタ' }
                            ]
                        },
                        {
                            title: 'RESTクライアント',
                            action: 'airplay',
                            group: '/mp/restclient',
                            items: [
                                { href: '/mp/restclient/09_rest-client', title: 'Restクライアント' }
                            ]
                        },
                        {
                            title: 'セキュリティ',
                            action: 'security',
                            group: '/mp/security',
                            items: [
                                { href: '/mp/security/01_security', title: 'セキュリティの追加' },
                                { href: '/mp/security/02_providers', title: 'セキュリティ・プロバイダ' },
                                { href: '/mp/security/03_configuration-secrets', title: '構成シークレット' }
                            ]
                        },
                        {
                            title: 'トレース',
                            action: 'timeline',
                            group: '/mp/tracing',
                            items: [
                                { href: '/mp/tracing/01_tracing', title: 'トレース' },
                                { href: '/mp/tracing/02_zipkin', title: 'Zipkinトレース' },
                                { href: '/mp/tracing/03_jaeger', title: 'Jaegerトレース' }
                            ]
                        },
                        {
                            title: 'Websocket',
                            action: 'sync_alt',
                            group: '/mp/websocket',
                            items: [
                                { href: '/mp/websocket/01_overview', title: 'WebSocket概要' }
                            ]
                        },
                        {
                            title: 'AOT',
                            action: 'save',
                            group: '/mp/aot',
                            items: [
                                { href: '/mp/aot/01_introduction', title: 'GraalVMネイティブ・イメージ' }
                            ]
                        },
                        {
                            title: 'テスティング',
                            action: 'thumbs_up_down',
                            group: '/mp/testing',
                            items: [
                                { href: '/mp/testing/01_testing', title: 'JUnit5でのテスト' }
                            ]
                        }
                    ]
                },
            ]
        }
        ,{ header: '追加リソース' },
        {
            title: 'Javadoc',
            action: 'library_books',
            href: 'apidocs/index.html?overview-summary.html',
            target: '_blank'
        },
        {
            title: 'コミュニティ',
            action: 'fa-github',
            href: '#/community/01_community',
            target: '_blank'
        }
    ];
}
