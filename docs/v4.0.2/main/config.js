
function createConfig() {
    return {
        home: "about/doc_overview",
        release: "4.0.2",
        releases: [
            "4.0.2"
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
            path: '/about/doc_overview',
            meta: {
                h1: 'Helidonドキュメント',
                title: 'Helidonドキュメント',
                h1Prefix: null,
                description: 'Helidon',
                keywords: 'helidon, java, microservices, microprofile, documentation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('about-doc_overview', 'about/doc_overview', {})
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
                description: 'Helidon WebServer Routing',
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
            path: '/mp/health',
            meta: {
                h1: 'MicroProfile Health',
                title: 'MicroProfile Health',
                h1Prefix: 'MP',
                description: 'MicroProfile Health support in Helidon MP',
                keywords: 'helidon, mp, microprofile, health',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-health', 'mp/health', {})
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
                h1: 'Jakarta REST',
                title: 'Jakarta REST',
                h1Prefix: 'MP',
                description: 'Helidon MicroProfile Jakarta REST',
                keywords: 'helidon, microprofile, micro-profile, jax-rs, applications, jakarta, rest',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-jaxrs-applications', 'mp/jaxrs/jaxrs-applications', {})
        },
        {
            path: '/mp/jaxrs/jaxrs-client',
            meta: {
                h1: 'Jakarta RESTクライアント',
                title: 'Jakarta RESTクライアント',
                h1Prefix: 'MP',
                description: 'Jakarta REST Client',
                keywords: 'helidon, rest, jax-rs, client, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-jaxrs-client', 'mp/jaxrs/jaxrs-client', {})
        },
        {
            path: '/mp/jaxrs/helidon-connector',
            meta: {
                h1: 'Helidonコネクタ',
                title: 'Helidonコネクタ',
                h1Prefix: 'MP',
                description: 'Helidon Connector for Jakarta REST Client',
                keywords: 'helidon, rest, jax-rs, client, microprofile, micro-profile, connector',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-jaxrs-helidon-connector', 'mp/jaxrs/helidon-connector', {})
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
                h1: 'Long Running Actions (LRA)',
                title: 'Long Running Actions (LRA)',
                h1Prefix: 'MP',
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
            path: '/mp/openapi/openapi',
            meta: {
                h1: 'HelidonのOpenAPI',
                title: 'HelidonのOpenAPI',
                h1Prefix: 'MP',
                description: 'Helidon MP OpenAPI Support',
                keywords: 'helidon, mp, microprofile, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-openapi-openapi', 'mp/openapi/openapi', {})
        },
        {
            path: '/mp/openapi/openapi-generator',
            meta: {
                h1: 'OpenAPIベースのコード生成',
                title: 'OpenAPIベースのコード生成',
                h1Prefix: 'MP',
                description: 'Helidon MP OpenAPI Generator',
                keywords: 'helidon, mp, microprofile, openapi, generator',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-openapi-openapi-generator', 'mp/openapi/openapi-generator', {})
        },
        {
            path: '/mp/openapi/openapi-ui',
            meta: {
                h1: 'OpenAPI UI',
                title: 'OpenAPI UI',
                h1Prefix: 'MP',
                description: 'Helidon MP OpenAPI UI Support',
                keywords: 'helidon, mp, openapi ui',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-openapi-openapi-ui', 'mp/openapi/openapi-ui', {})
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
                h1: 'Kafka Connector',
                title: 'Kafka Connector',
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
            path: '/mp/reactivemessaging/weblogic',
            meta: {
                h1: 'WebLogic JMSコネクタ',
                title: 'WebLogic JMSコネクタ',
                h1Prefix: 'MP',
                description: 'Reactive Messaging support for WebLogic JMS in Helidon MP',
                keywords: 'helidon, mp, messaging, jms, WebLogic, wls, thin',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-reactivemessaging-weblogic', 'mp/reactivemessaging/weblogic', {})
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
            path: '/mp/scheduling',
            meta: {
                h1: 'スケジューリング',
                title: 'スケジューリング',
                h1Prefix: 'MP',
                description: 'Scheduling in Helidon MP',
                keywords: 'helidon, mp, scheduling',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-scheduling', 'mp/scheduling', {})
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
            path: '/mp/telemetry',
            meta: {
                h1: 'パフォーマンス情報の送信',
                title: 'パフォーマンス情報の送信',
                h1Prefix: 'MP',
                description: 'Helidon MP Telemetry Support',
                keywords: 'helidon, telemetry, microprofile, micro-profile',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-telemetry', 'mp/telemetry', {})
        },
        {
            path: '/mp/testing',
            meta: {
                h1: 'JUnit5でのテスト',
                title: 'JUnit5でのテスト',
                h1Prefix: 'MP',
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
                h1: 'テストNGによるテスト',
                title: 'テストNGによるテスト',
                h1Prefix: 'MP',
                description: 'Helidon Testing with TestNG',
                keywords: 'helidon, mp, test, testing, testng',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('mp-testing-ng', 'mp/testing-ng', {})
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
            path: '/se/introduction',
            meta: {
                h1: '導入',
                title: '導入',
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
                keywords: 'helidon, metrics, guide',
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
            path: '/se/guides/upgrade',
            meta: {
                h1: 'Helidon SE 2.xアップグレード・ガイド',
                title: 'Helidon SE 2.xアップグレード・ガイド',
                h1Prefix: 'SE',
                description: 'Helidon Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-upgrade', 'se/guides/upgrade', {})
        },
        {
            path: '/se/guides/upgrade_3x',
            meta: {
                h1: 'Helidon SE 3.xアップグレード・ガイド',
                title: 'Helidon SE 3.xアップグレード・ガイド',
                h1Prefix: null,
                description: 'Helidon SE 3.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-upgrade_3x', 'se/guides/upgrade_3x', {})
        },
        {
            path: '/se/guides/upgrade_4x',
            meta: {
                h1: 'Helidon SE 4.xアップグレード・ガイド',
                title: 'Helidon SE 4.xアップグレード・ガイド',
                h1Prefix: null,
                description: 'Helidon SE 4.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-guides-upgrade_4x', 'se/guides/upgrade_4x', {})
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
            path: '/se/fault-tolerance',
            meta: {
                h1: 'Helidonのフォルト・トレランス',
                title: 'Helidonのフォルト・トレランス',
                h1Prefix: 'SE',
                description: 'Fault Tolerance in Helidon',
                keywords: 'helidon, java, fault, tolerance, fault tolerance',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-fault-tolerance', 'se/fault-tolerance', {})
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
            path: '/se/openapi/openapi',
            meta: {
                h1: 'HelidonのOpenAPI',
                title: 'HelidonのOpenAPI',
                h1Prefix: 'SE',
                description: 'Helidon SE OpenAPI Support',
                keywords: 'helidon, se, openapi',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-openapi-openapi', 'se/openapi/openapi', {})
        },
        {
            path: '/se/openapi/openapi-generator',
            meta: {
                h1: 'OpenAPIベースのコード生成',
                title: 'OpenAPIベースのコード生成',
                h1Prefix: 'SE',
                description: 'Helidon {flavor-uc} OpenAPI Generator',
                keywords: 'helidon, {flavor-lc}, openapi, generator',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-openapi-openapi-generator', 'se/openapi/openapi-generator', {})
        },
        {
            path: '/se/openapi/openapi-ui',
            meta: {
                h1: 'OpenAPI UI',
                title: 'OpenAPI UI',
                h1Prefix: 'SE',
                description: 'Helidon SE OpenAPI UI Support',
                keywords: 'helidon, se, openapi ui',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-openapi-openapi-ui', 'se/openapi/openapi-ui', {})
        },
        {
            path: '/se/observability',
            meta: {
                h1: '可観測性',
                title: '可観測性',
                h1Prefix: 'SE',
                description: 'Helidon SE Observability',
                keywords: 'helidon, observability',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-observability', 'se/observability', {})
        },
        {
            path: '/se/reactive-messaging',
            meta: {
                h1: 'リアクティブ・メッセージング',
                title: 'リアクティブ・メッセージング',
                h1Prefix: 'SE',
                description: 'Reactive Messaging support in Helidon SE',
                keywords: 'helidon, se, messaging',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-reactive-messaging', 'se/reactive-messaging', {})
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
            path: '/se/webserver',
            meta: {
                h1: 'WebServer概要',
                title: 'WebServer概要',
                h1Prefix: 'SE',
                description: 'Helidon WebServer Introduction',
                keywords: 'helidon, java, webserver, tls',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-webserver', 'se/webserver', {})
        },
        {
            path: '/se/scheduling',
            meta: {
                h1: '概要',
                title: '概要',
                h1Prefix: 'SE',
                description: 'Scheduling in Helidon SE',
                keywords: 'helidon, se, scheduling',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-scheduling', 'se/scheduling', {})
        },
        {
            path: '/se/security/introduction',
            meta: {
                h1: 'セキュリティの紹介',
                title: 'セキュリティの紹介',
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
                h1: 'WebServer統合',
                title: 'WebServer統合',
                h1Prefix: 'SE',
                description: 'Helidon Security WebServer integration',
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
                h1Prefix: null,
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
            path: '/se/sse/sse',
            meta: {
                h1: 'Helidonでのサーバー送信イベント',
                title: 'Helidonでのサーバー送信イベント',
                h1Prefix: 'SE',
                description: 'Helidon SSE Support',
                keywords: 'helidon, sse',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-sse-sse', 'se/sse/sse', {})
        },
        {
            path: '/se/testing',
            meta: {
                h1: 'Helidonテスト',
                title: 'Helidonテスト',
                h1Prefix: null,
                description: 'Testing in Helidon',
                keywords: 'helidon, test, testing, junit',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('se-testing', 'se/testing', {})
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
                keywords: 'helidon, se, rest, httpclient, webclient',
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
            path: '/config/io_helidon_integrations_oci_sdk_runtime_OciConfig',
            meta: {
                h1: 'OciConfig (integrations.oci.sdk.runtime)構成',
                title: 'OciConfig (integrations.oci.sdk.runtime)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.oci.sdk.runtime.OciConfig',
                keywords: 'helidon, config, io.helidon.integrations.oci.sdk.runtime.OciConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_oci_sdk_runtime_OciConfig', 'config/io_helidon_integrations_oci_sdk_runtime_OciConfig', {})
        },
        {
            path: '/config/io_helidon_webclient_http2_Http2ClientProtocolConfig',
            meta: {
                h1: 'Http2ClientProtocolConfig (webclient.http2)構成',
                title: 'Http2ClientProtocolConfig (webclient.http2)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.http2.Http2ClientProtocolConfig',
                keywords: 'helidon, config, io.helidon.webclient.http2.Http2ClientProtocolConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_http2_Http2ClientProtocolConfig', 'config/io_helidon_webclient_http2_Http2ClientProtocolConfig', {})
        },
        {
            path: '/config/io_helidon_tracing_providers_opentracing_OpenTracingTracerBuilder',
            meta: {
                h1: 'OpenTracingTracerBuilder (tracing.providers.opentracing)構成',
                title: 'OpenTracingTracerBuilder (tracing.providers.opentracing)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.providers.opentracing.OpenTracingTracerBuilder',
                keywords: 'helidon, config, io.helidon.tracing.providers.opentracing.OpenTracingTracerBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_providers_opentracing_OpenTracingTracerBuilder', 'config/io_helidon_tracing_providers_opentracing_OpenTracingTracerBuilder', {})
        },
        {
            path: '/config/org_eclipse_microprofile_config_Config',
            meta: {
                h1: 'org.eclipse.microprofile.config.Config構成',
                title: 'org.eclipse.microprofile.config.Config構成',
                h1Prefix: null,
                description: 'Configuration of org.eclipse.microprofile.config.Config',
                keywords: 'helidon, config, org.eclipse.microprofile.config.Config',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-org_eclipse_microprofile_config_Config', 'config/org_eclipse_microprofile_config_Config', {})
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
            path: '/config/io_helidon_metrics_api_MetricsConfig',
            meta: {
                h1: 'MetricsConfig (metrics.api)構成',
                title: 'MetricsConfig (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.MetricsConfig',
                keywords: 'helidon, config, io.helidon.metrics.api.MetricsConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_MetricsConfig', 'config/io_helidon_metrics_api_MetricsConfig', {})
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
            path: '/config/io_helidon_openapi_OpenApiFeature',
            meta: {
                h1: 'OpenApiFeature (openapi)構成',
                title: 'OpenApiFeature (openapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.openapi.OpenApiFeature',
                keywords: 'helidon, config, io.helidon.openapi.OpenApiFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_openapi_OpenApiFeature', 'config/io_helidon_openapi_OpenApiFeature', {})
        },
        {
            path: '/config/io_helidon_cors_CrossOriginConfig',
            meta: {
                h1: 'CrossOriginConfig (cors)構成',
                title: 'CrossOriginConfig (cors)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.cors.CrossOriginConfig',
                keywords: 'helidon, config, io.helidon.cors.CrossOriginConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_cors_CrossOriginConfig', 'config/io_helidon_cors_CrossOriginConfig', {})
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
            path: '/config/io_helidon_webserver_http2_Http2Config',
            meta: {
                h1: 'Http2Config (webserver.http2)構成',
                title: 'Http2Config (webserver.http2)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.http2.Http2Config',
                keywords: 'helidon, config, io.helidon.webserver.http2.Http2Config',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_http2_Http2Config', 'config/io_helidon_webserver_http2_Http2Config', {})
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
            path: '/config/io_helidon_webserver_servicecommon_RestServiceSettings',
            meta: {
                h1: 'RestServiceSettings (webserver.servicecommon)構成',
                title: 'RestServiceSettings (webserver.servicecommon)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.servicecommon.RestServiceSettings',
                keywords: 'helidon, config, io.helidon.webserver.servicecommon.RestServiceSettings',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_servicecommon_RestServiceSettings', 'config/io_helidon_webserver_servicecommon_RestServiceSettings', {})
        },
        {
            path: '/about/doc_sitemap',
            meta: {
                h1: 'Helidonドキュメントの概要',
                title: 'Helidonドキュメントの概要',
                h1Prefix: null,
                description: 'Helidon Documentation Sitemap',
                keywords: 'helidon, java, microservices, microprofile, documentation',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-doc_sitemap', 'about/doc_sitemap', {})
        },
        {
            path: '/config/io_helidon_integrations_neo4j_Neo4j',
            meta: {
                h1: 'Neo4j (integrations.neo4j)構成',
                title: 'Neo4j (integrations.neo4j)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.neo4j.Neo4j',
                keywords: 'helidon, config, io.helidon.integrations.neo4j.Neo4j',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_neo4j_Neo4j', 'config/io_helidon_integrations_neo4j_Neo4j', {})
        },
        {
            path: '/mp/guides/upgrade_4x',
            meta: {
                h1: 'Helidon MP 4.xアップグレード・ガイド',
                title: 'Helidon MP 4.xアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP 4.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities, 3.x',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-guides-upgrade_4x', 'mp/guides/upgrade_4x', {})
        },
        {
            path: '/mp/guides/upgrade_3x',
            meta: {
                h1: 'Helidon MP 3.xアップグレード・ガイド',
                title: 'Helidon MP 3.xアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP 3.x Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities, 3.x',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-guides-upgrade_3x', 'mp/guides/upgrade_3x', {})
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
            path: '/config/io_helidon_webserver_grpc_GrpcConfig',
            meta: {
                h1: 'GrpcConfig (webserver.grpc)構成',
                title: 'GrpcConfig (webserver.grpc)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.grpc.GrpcConfig',
                keywords: 'helidon, config, io.helidon.webserver.grpc.GrpcConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_grpc_GrpcConfig', 'config/io_helidon_webserver_grpc_GrpcConfig', {})
        },
        {
            path: '/config/io_helidon_tracing_providers_zipkin_ZipkinTracerBuilder',
            meta: {
                h1: 'io.opentracing.Tracer構成',
                title: 'io.opentracing.Tracer構成',
                h1Prefix: null,
                description: 'Configuration of io.opentracing.Tracer',
                keywords: 'helidon, config, io.opentracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_providers_zipkin_ZipkinTracerBuilder', 'config/io_helidon_tracing_providers_zipkin_ZipkinTracerBuilder', {})
        },
        {
            path: '/about/additional_info',
            meta: {
                h1: 'Helidonコミュニティおよびサポート・リファレンス',
                title: 'Helidonコミュニティおよびサポート・リファレンス',
                h1Prefix: null,
                description: 'Helidon community links and references',
                keywords: 'helidon, java, microservices, microprofile, documentation, nima',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-additional_info', 'about/additional_info', {})
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
            path: '/about/generating_project',
            meta: {
                h1: 'Helidonプロジェクト・スタータ',
                title: 'Helidonプロジェクト・スタータ',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-generating_project', 'about/generating_project', {})
        },
        {
            path: '/config/io_helidon_scheduling_FixedRate',
            meta: {
                h1: 'FixedRate (scheduling)構成',
                title: 'FixedRate (scheduling)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.scheduling.FixedRate',
                keywords: 'helidon, config, io.helidon.scheduling.FixedRate',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_scheduling_FixedRate', 'config/io_helidon_scheduling_FixedRate', {})
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
            path: '/config/io_helidon_integrations_oci_metrics_OciMetricsSupport',
            meta: {
                h1: 'OciMetricsSupport (integrations.oci.metrics)構成',
                title: 'OciMetricsSupport (integrations.oci.metrics)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.oci.metrics.OciMetricsSupport',
                keywords: 'helidon, config, io.helidon.integrations.oci.metrics.OciMetricsSupport',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_oci_metrics_OciMetricsSupport', 'config/io_helidon_integrations_oci_metrics_OciMetricsSupport', {})
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
            path: '/config/io_helidon_common_socket_SocketOptions',
            meta: {
                h1: 'SocketOptions (common.socket)構成',
                title: 'SocketOptions (common.socket)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.socket.SocketOptions',
                keywords: 'helidon, config, io.helidon.common.socket.SocketOptions',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_socket_SocketOptions', 'config/io_helidon_common_socket_SocketOptions', {})
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
            path: '/config/io_helidon_common_configurable_ScheduledThreadPoolConfig',
            meta: {
                h1: 'ScheduledThreadPoolSupplier (common.configurable)構成',
                title: 'ScheduledThreadPoolSupplier (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.ScheduledThreadPoolSupplier',
                keywords: 'helidon, config, io.helidon.common.configurable.ScheduledThreadPoolSupplier',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_ScheduledThreadPoolConfig', 'config/io_helidon_common_configurable_ScheduledThreadPoolConfig', {})
        },
        {
            path: '/config/io_helidon_webclient_api_WebClientCookieManager',
            meta: {
                h1: 'WebClientCookieManager (webclient.api)構成',
                title: 'WebClientCookieManager (webclient.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.api.WebClientCookieManager',
                keywords: 'helidon, config, io.helidon.webclient.api.WebClientCookieManager',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_api_WebClientCookieManager', 'config/io_helidon_webclient_api_WebClientCookieManager', {})
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
            path: '/config/io_helidon_webclient_http1_Http1ClientProtocolConfig',
            meta: {
                h1: 'Http1ClientProtocolConfig (webclient.http1)構成',
                title: 'Http1ClientProtocolConfig (webclient.http1)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.http1.Http1ClientProtocolConfig',
                keywords: 'helidon, config, io.helidon.webclient.http1.Http1ClientProtocolConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_http1_Http1ClientProtocolConfig', 'config/io_helidon_webclient_http1_Http1ClientProtocolConfig', {})
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
            path: '/config/io_helidon_webserver_cors_CorsConfig',
            meta: {
                h1: 'CorsFeature (webserver.cors)構成',
                title: 'CorsFeature (webserver.cors)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.cors.CorsFeature',
                keywords: 'helidon, config, io.helidon.webserver.cors.CorsFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_cors_CorsConfig', 'config/io_helidon_webserver_cors_CorsConfig', {})
        },
        {
            path: '/config/io_opentracing_Tracer',
            meta: {
                h1: 'io.opentracing.Tracer構成',
                title: 'io.opentracing.Tracer構成',
                h1Prefix: null,
                description: 'Configuration of io.opentracing.Tracer',
                keywords: 'helidon, config, io.opentracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_opentracing_Tracer', 'config/io_opentracing_Tracer', {})
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
            path: '/config/io_helidon_metrics_api_ScopingConfig',
            meta: {
                h1: 'ScopingConfig (metrics.api)構成',
                title: 'ScopingConfig (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.ScopingConfig',
                keywords: 'helidon, config, io.helidon.metrics.api.ScopingConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_ScopingConfig', 'config/io_helidon_metrics_api_ScopingConfig', {})
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
            path: '/config/io_helidon_http_RequestedUriDiscoveryContext',
            meta: {
                h1: 'RequestedUriDiscoveryContext (http)構成',
                title: 'RequestedUriDiscoveryContext (http)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.http.RequestedUriDiscoveryContext',
                keywords: 'helidon, config, io.helidon.http.RequestedUriDiscoveryContext',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_http_RequestedUriDiscoveryContext', 'config/io_helidon_http_RequestedUriDiscoveryContext', {})
        },
        {
            path: '/about/benefits',
            meta: {
                h1: 'Helidonの機能と利点',
                title: 'Helidonの機能と利点',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-benefits', 'about/benefits', {})
        },
        {
            path: '/config/io_helidon_scheduling_Cron',
            meta: {
                h1: 'Cron (scheduling)構成',
                title: 'Cron (scheduling)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.scheduling.Cron',
                keywords: 'helidon, config, io.helidon.scheduling.Cron',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_scheduling_Cron', 'config/io_helidon_scheduling_Cron', {})
        },
        {
            path: '/config/io_helidon_webserver_http1_Http1Config',
            meta: {
                h1: 'Http1Config (webserver.http1)構成',
                title: 'Http1Config (webserver.http1)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.http1.Http1Config',
                keywords: 'helidon, config, io.helidon.webserver.http1.Http1Config',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_http1_Http1Config', 'config/io_helidon_webserver_http1_Http1Config', {})
        },
        {
            path: '/config/io_helidon_webserver_websocket_WsConfig',
            meta: {
                h1: 'WsConfig (webserver.websocket)構成',
                title: 'WsConfig (webserver.websocket)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.websocket.WsConfig',
                keywords: 'helidon, config, io.helidon.webserver.websocket.WsConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_websocket_WsConfig', 'config/io_helidon_webserver_websocket_WsConfig', {})
        },
        {
            path: '/config/io_helidon_common_configurable_ThreadPoolConfig',
            meta: {
                h1: 'ThreadPoolSupplier (common.configurable)構成',
                title: 'ThreadPoolSupplier (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.ThreadPoolSupplier',
                keywords: 'helidon, config, io.helidon.common.configurable.ThreadPoolSupplier',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_ThreadPoolConfig', 'config/io_helidon_common_configurable_ThreadPoolConfig', {})
        },
        {
            path: '/config/io_helidon_webserver_security_PathsConfig',
            meta: {
                h1: 'PathsConfig (webserver.security)構成',
                title: 'PathsConfig (webserver.security)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.security.PathsConfig',
                keywords: 'helidon, config, io.helidon.webserver.security.PathsConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_security_PathsConfig', 'config/io_helidon_webserver_security_PathsConfig', {})
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
            path: '/config/io_helidon_webserver_servicecommon_HelidonFeatureSupport_Builder',
            meta: {
                h1: 'Builder (webserver.servicecommon.HelidonFeatureSupport)構成',
                title: 'Builder (webserver.servicecommon.HelidonFeatureSupport)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.servicecommon.HelidonFeatureSupport.Builder',
                keywords: 'helidon, config, io.helidon.webserver.servicecommon.HelidonFeatureSupport.Builder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_servicecommon_HelidonFeatureSupport_Builder', 'config/io_helidon_webserver_servicecommon_HelidonFeatureSupport_Builder', {})
        },
        {
            path: '/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig',
            meta: {
                h1: 'KeyPerformanceIndicatorMetricsConfig (metrics.api)構成',
                title: 'KeyPerformanceIndicatorMetricsConfig (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.KeyPerformanceIndicatorMetricsConfig',
                keywords: 'helidon, config, io.helidon.metrics.api.KeyPerformanceIndicatorMetricsConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig', 'config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig', {})
        },
        {
            path: '/config/io_helidon_webserver_cors_CorsFeature',
            meta: {
                h1: 'CorsFeature (webserver.cors)構成',
                title: 'CorsFeature (webserver.cors)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.cors.CorsFeature',
                keywords: 'helidon, config, io.helidon.webserver.cors.CorsFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_cors_CorsFeature', 'config/io_helidon_webserver_cors_CorsFeature', {})
        },
        {
            path: '/config/io_helidon_webserver_accesslog_AccessLogConfig',
            meta: {
                h1: 'AccessLogFeature (webserver.accesslog)構成',
                title: 'AccessLogFeature (webserver.accesslog)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.accesslog.AccessLogFeature',
                keywords: 'helidon, config, io.helidon.webserver.accesslog.AccessLogFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_accesslog_AccessLogConfig', 'config/io_helidon_webserver_accesslog_AccessLogConfig', {})
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
            path: '/config/io_helidon_webserver_observe_info_InfoObserver',
            meta: {
                h1: 'InfoObserver (webserver.observe.info)構成',
                title: 'InfoObserver (webserver.observe.info)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.info.InfoObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.info.InfoObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_info_InfoObserver', 'config/io_helidon_webserver_observe_info_InfoObserver', {})
        },
        {
            path: '/config/io_helidon_common_pki_PemKeys',
            meta: {
                h1: 'PemKeys (common.pki)構成',
                title: 'PemKeys (common.pki)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.PemKeys',
                keywords: 'helidon, config, io.helidon.common.pki.PemKeys',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_PemKeys', 'config/io_helidon_common_pki_PemKeys', {})
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
            path: '/se/metrics/metrics-capable-components',
            meta: {
                h1: 'メトリクス対応モジュール',
                title: 'メトリクス対応モジュール',
                h1Prefix: 'SE',
                description: 'Helidon SE metrics-capable components',
                keywords: 'helidon, metrics, metrics-capable, microprofile, guide',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('se-metrics-metrics-capable-components', 'se/metrics/metrics-capable-components', {})
        },
        {
            path: '/config/io_helidon_webclient_websocket_WsClient',
            meta: {
                h1: 'WsClient (webclient.websocket)構成',
                title: 'WsClient (webclient.websocket)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.websocket.WsClient',
                keywords: 'helidon, config, io.helidon.webclient.websocket.WsClient',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_websocket_WsClient', 'config/io_helidon_webclient_websocket_WsClient', {})
        },
        {
            path: '/config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProviderBase_Builder',
            meta: {
                h1: 'Builder (security.providers.idcs.mapper.IdcsRoleMapperProviderBase)構成',
                title: 'Builder (security.providers.idcs.mapper.IdcsRoleMapperProviderBase)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProviderBase.Builder',
                keywords: 'helidon, config, io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProviderBase.Builder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProviderBase_Builder', 'config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProviderBase_Builder', {})
        },
        {
            path: '/config/io_helidon_scheduling_TaskConfig',
            meta: {
                h1: 'TaskConfig (scheduling)構成',
                title: 'TaskConfig (scheduling)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.scheduling.TaskConfig',
                keywords: 'helidon, config, io.helidon.scheduling.TaskConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_scheduling_TaskConfig', 'config/io_helidon_scheduling_TaskConfig', {})
        },
        {
            path: '/config/io_helidon_microprofile_openapi_MpOpenApiManagerConfig',
            meta: {
                h1: 'MpOpenApiManagerConfig (microprofile.openapi)構成',
                title: 'MpOpenApiManagerConfig (microprofile.openapi)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.microprofile.openapi.MpOpenApiManagerConfig',
                keywords: 'helidon, config, io.helidon.microprofile.openapi.MpOpenApiManagerConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_openapi_MpOpenApiManagerConfig', 'config/io_helidon_microprofile_openapi_MpOpenApiManagerConfig', {})
        },
        {
            path: '/config/io_helidon_dbclient_jdbc_JdbcParametersConfig',
            meta: {
                h1: 'JdbcParametersConfig (dbclient.jdbc)構成',
                title: 'JdbcParametersConfig (dbclient.jdbc)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.dbclient.jdbc.JdbcParametersConfig',
                keywords: 'helidon, config, io.helidon.dbclient.jdbc.JdbcParametersConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_dbclient_jdbc_JdbcParametersConfig', 'config/io_helidon_dbclient_jdbc_JdbcParametersConfig', {})
        },
        {
            path: '/config/io_helidon_security_providers_oidc_common_BaseBuilder',
            meta: {
                h1: 'BaseBuilder (security.providers.oidc.common)構成',
                title: 'BaseBuilder (security.providers.oidc.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.oidc.common.BaseBuilder',
                keywords: 'helidon, config, io.helidon.security.providers.oidc.common.BaseBuilder',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_oidc_common_BaseBuilder', 'config/io_helidon_security_providers_oidc_common_BaseBuilder', {})
        },
        {
            path: '/config/io_helidon_webclient_api_WebClient',
            meta: {
                h1: 'WebClient (webclient.api)構成',
                title: 'WebClient (webclient.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.api.WebClient',
                keywords: 'helidon, config, io.helidon.webclient.api.WebClient',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_api_WebClient', 'config/io_helidon_webclient_api_WebClient', {})
        },
        {
            path: '/about/archetype',
            meta: {
                h1: 'Helidonアプリケーションのブートストラップ',
                title: 'Helidonアプリケーションのブートストラップ',
                h1Prefix: null,
                description: 'Helidon Application Bootstrapping',
                keywords: 'helidon archetypes',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-archetype', 'about/archetype', {})
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
            path: '/config/io_helidon_http_encoding_ContentEncodingContext',
            meta: {
                h1: 'ContentEncodingContext (http.encoding)構成',
                title: 'ContentEncodingContext (http.encoding)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.http.encoding.ContentEncodingContext',
                keywords: 'helidon, config, io.helidon.http.encoding.ContentEncodingContext',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_http_encoding_ContentEncodingContext', 'config/io_helidon_http_encoding_ContentEncodingContext', {})
        },
        {
            path: '/config/io_helidon_webserver_observe_config_ConfigObserver',
            meta: {
                h1: 'ConfigObserver (webserver.observe.config)構成',
                title: 'ConfigObserver (webserver.observe.config)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.config.ConfigObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.config.ConfigObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_config_ConfigObserver', 'config/io_helidon_webserver_observe_config_ConfigObserver', {})
        },
        {
            path: '/config/io_helidon_common_pki_Keys',
            meta: {
                h1: 'Keys (common.pki)構成',
                title: 'Keys (common.pki)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.Keys',
                keywords: 'helidon, config, io.helidon.common.pki.Keys',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_Keys', 'config/io_helidon_common_pki_Keys', {})
        },
        {
            path: '/config/io_helidon_metrics_api_Tag',
            meta: {
                h1: 'Tag (metrics.api)構成',
                title: 'Tag (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.Tag',
                keywords: 'helidon, config, io.helidon.metrics.api.Tag',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_Tag', 'config/io_helidon_metrics_api_Tag', {})
        },
        {
            path: '/config/io_helidon_webserver_context_ContextFeature',
            meta: {
                h1: 'ContextFeature (webserver.context)構成',
                title: 'ContextFeature (webserver.context)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.context.ContextFeature',
                keywords: 'helidon, config, io.helidon.webserver.context.ContextFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_context_ContextFeature', 'config/io_helidon_webserver_context_ContextFeature', {})
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
                hasNav: false
            },
            component: loadPage('se-metrics-micrometer', 'se/metrics/micrometer', {})
        },
        {
            path: '/config/io_helidon_microprofile_jwt',
            meta: {
                h1: 'JWT構成',
                title: 'JWT構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.microprofile.jwt',
                keywords: 'helidon, security, jwt, microprofile',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_microprofile_jwt', 'config/io_helidon_microprofile_jwt', {})
        },
        {
            path: '/config/io_helidon_faulttolerance_Async',
            meta: {
                h1: 'Async (faulttolerance)構成',
                title: 'Async (faulttolerance)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.faulttolerance.Async',
                keywords: 'helidon, config, io.helidon.faulttolerance.Async',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_faulttolerance_Async', 'config/io_helidon_faulttolerance_Async', {})
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
            path: '/config/io_helidon_webserver_ConnectionConfig',
            meta: {
                h1: 'ConnectionConfig (webwebserver)構成',
                title: 'ConnectionConfig (webwebserver)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.ConnectionConfig',
                keywords: 'helidon, config, io.helidon.webserver.ConnectionConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_ConnectionConfig', 'config/io_helidon_webserver_ConnectionConfig', {})
        },
        {
            path: '/config/io_helidon_integrations_openapi_ui_OpenApiUi',
            meta: {
                h1: 'OpenApiUi (integrations.openapi.ui)構成',
                title: 'OpenApiUi (integrations.openapi.ui)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.openapi.ui.OpenApiUi',
                keywords: 'helidon, config, io.helidon.integrations.openapi.ui.OpenApiUi',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_openapi_ui_OpenApiUi', 'config/io_helidon_integrations_openapi_ui_OpenApiUi', {})
        },
        {
            path: '/config/io_helidon_webserver_security_SecurityHandler',
            meta: {
                h1: 'SecurityHandler (webserver.security)構成',
                title: 'SecurityHandler (webserver.security)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.security.SecurityHandler',
                keywords: 'helidon, config, io.helidon.webserver.security.SecurityHandler',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_security_SecurityHandler', 'config/io_helidon_webserver_security_SecurityHandler', {})
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
            path: '/config/io_helidon_webserver_observe_tracing_TracingObserver',
            meta: {
                h1: 'TracingObserver (webserver.observe.tracing)構成',
                title: 'TracingObserver (webserver.observe.tracing)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.tracing.TracingObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.tracing.TracingObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_tracing_TracingObserver', 'config/io_helidon_webserver_observe_tracing_TracingObserver', {})
        },
        {
            path: '/config/io_helidon_security_providers_oidc_common_TenantConfig',
            meta: {
                h1: 'TenantConfig (security.providers.oidc.common)構成',
                title: 'TenantConfig (security.providers.oidc.common)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.oidc.common.TenantConfig',
                keywords: 'helidon, config, io.helidon.security.providers.oidc.common.TenantConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_oidc_common_TenantConfig', 'config/io_helidon_security_providers_oidc_common_TenantConfig', {})
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
                hasNav: false
            },
            component: loadPage('mp-metrics-metrics-capable-components', 'mp/metrics/metrics-capable-components', {})
        },
        {
            path: '/about/introduction',
            meta: {
                h1: 'Helidonの紹介',
                title: 'Helidonの紹介',
                h1Prefix: null,
                description: 'Helidon',
                keywords: 'helidon, java, microservices, microprofile',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-introduction', 'about/introduction', {})
        },
        {
            path: '/config/io_helidon_webserver_security_SecurityFeature',
            meta: {
                h1: 'SecurityFeature (webserver.security)構成',
                title: 'SecurityFeature (webserver.security)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.security.SecurityFeature',
                keywords: 'helidon, config, io.helidon.webserver.security.SecurityFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_security_SecurityFeature', 'config/io_helidon_webserver_security_SecurityFeature', {})
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
            path: '/config/io_helidon_integrations_micrometer_MicrometerFeature',
            meta: {
                h1: 'MicrometerFeature (integrations.micrometer)構成',
                title: 'MicrometerFeature (integrations.micrometer)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.integrations.micrometer.MicrometerFeature',
                keywords: 'helidon, config, io.helidon.integrations.micrometer.MicrometerFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_integrations_micrometer_MicrometerFeature', 'config/io_helidon_integrations_micrometer_MicrometerFeature', {})
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
                hasNav: false
            },
            component: loadPage('about-cli', 'about/cli', {})
        },
        {
            path: '/config/io_helidon_webclient_api_HttpConfigBase',
            meta: {
                h1: 'HttpConfigBase (webclient.api)構成',
                title: 'HttpConfigBase (webclient.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.api.HttpConfigBase',
                keywords: 'helidon, config, io.helidon.webclient.api.HttpConfigBase',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_api_HttpConfigBase', 'config/io_helidon_webclient_api_HttpConfigBase', {})
        },
        {
            path: '/config/io_helidon_http_media_MediaContext',
            meta: {
                h1: 'MediaContext (http.media)構成',
                title: 'MediaContext (http.media)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.http.media.MediaContext',
                keywords: 'helidon, config, io.helidon.http.media.MediaContext',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_http_media_MediaContext', 'config/io_helidon_http_media_MediaContext', {})
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
            path: '/config/io_helidon_webserver_observe_metrics_MetricsObserver',
            meta: {
                h1: 'MetricsObserver (webserver.observe.metrics)構成',
                title: 'MetricsObserver (webserver.observe.metrics)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.metrics.MetricsObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.metrics.MetricsObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_metrics_MetricsObserver', 'config/io_helidon_webserver_observe_metrics_MetricsObserver', {})
        },
        {
            path: '/se/inject/injection_intro',
            meta: {
                h1: 'Helidonインジェクション',
                title: 'Helidonインジェクション',
                h1Prefix: null,
                description: 'about Helidon Injection',
                keywords: 'helidon, inject, injection, java, microservices, virtual threads',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('se-inject-injection_intro', 'se/inject/injection_intro', {})
        },
        {
            path: '/config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProvider',
            meta: {
                h1: 'IdcsRoleMapperProvider (security.providers.idcs.mapper)構成',
                title: 'IdcsRoleMapperProvider (security.providers.idcs.mapper)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider',
                keywords: 'helidon, config, io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProvider', 'config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProvider', {})
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
                h1: 'Tracer (tracing)構成',
                title: 'Tracer (tracing)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.Tracer',
                keywords: 'helidon, config, io.helidon.tracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_Tracer', 'config/io_helidon_tracing_Tracer', {})
        },
        {
            path: '/config/io_helidon_webserver_observe_log_LogStreamConfig',
            meta: {
                h1: 'LogStreamConfig (webserver.observe.log)構成',
                title: 'LogStreamConfig (webserver.observe.log)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.log.LogStreamConfig',
                keywords: 'helidon, config, io.helidon.webserver.observe.log.LogStreamConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_log_LogStreamConfig', 'config/io_helidon_webserver_observe_log_LogStreamConfig', {})
        },
        {
            path: '/config/io_helidon_webserver_accesslog_AccessLogFeature',
            meta: {
                h1: 'AccessLogFeature (webserver.accesslog)構成',
                title: 'AccessLogFeature (webserver.accesslog)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.accesslog.AccessLogFeature',
                keywords: 'helidon, config, io.helidon.webserver.accesslog.AccessLogFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_accesslog_AccessLogFeature', 'config/io_helidon_webserver_accesslog_AccessLogFeature', {})
        },
        {
            path: '/config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperProvider',
            meta: {
                h1: 'IdcsMtRoleMapperProvider (security.providers.idcs.mapper)構成',
                title: 'IdcsMtRoleMapperProvider (security.providers.idcs.mapper)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperProvider',
                keywords: 'helidon, config, io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperProvider',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperProvider', 'config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperProvider', {})
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
            path: '/config/io_helidon_webserver_observe_ObserveFeature',
            meta: {
                h1: 'ObserveFeature (webserver.observe)構成',
                title: 'ObserveFeature (webserver.observe)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.ObserveFeature',
                keywords: 'helidon, config, io.helidon.webserver.observe.ObserveFeature',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_ObserveFeature', 'config/io_helidon_webserver_observe_ObserveFeature', {})
        },
        {
            path: '/about/intro',
            meta: {
                h1: 'Helidon 4の紹介',
                title: 'Helidon 4の紹介',
                h1Prefix: null,
                description: 'Helidon',
                keywords: 'helidon, java, microservices, Helidon N&amp;iacute;ma, Project N&amp;iacute;ma',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('about-intro', 'about/intro', {})
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
            path: '/config/io_helidon_webclient_websocket_WsClientProtocolConfig',
            meta: {
                h1: 'WsClientProtocolConfig (webclient.websocket)構成',
                title: 'WsClientProtocolConfig (webclient.websocket)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.websocket.WsClientProtocolConfig',
                keywords: 'helidon, config, io.helidon.webclient.websocket.WsClientProtocolConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_websocket_WsClientProtocolConfig', 'config/io_helidon_webclient_websocket_WsClientProtocolConfig', {})
        },
        {
            path: '/config/io_helidon_webserver_observe_ObserverConfigBase',
            meta: {
                h1: 'ObserverConfigBase (webserver.observe)構成',
                title: 'ObserverConfigBase (webserver.observe)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.ObserverConfigBase',
                keywords: 'helidon, config, io.helidon.webserver.observe.ObserverConfigBase',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_ObserverConfigBase', 'config/io_helidon_webserver_observe_ObserverConfigBase', {})
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
            path: '/config/io_helidon_webserver_observe_health_HealthObserver',
            meta: {
                h1: 'HealthObserver (webserver.observe.health)構成',
                title: 'HealthObserver (webserver.observe.health)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.health.HealthObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.health.HealthObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_health_HealthObserver', 'config/io_helidon_webserver_observe_health_HealthObserver', {})
        },
        {
            path: '/config/io_helidon_webserver_observe_log_LogObserver',
            meta: {
                h1: 'LogObserver (webserver.observe.log)構成',
                title: 'LogObserver (webserver.observe.log)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.observe.log.LogObserver',
                keywords: 'helidon, config, io.helidon.webserver.observe.log.LogObserver',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_observe_log_LogObserver', 'config/io_helidon_webserver_observe_log_LogObserver', {})
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
            path: '/config/io_helidon_metrics_api_ScopeConfig',
            meta: {
                h1: 'ScopeConfig (metrics.api)構成',
                title: 'ScopeConfig (metrics.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.metrics.api.ScopeConfig',
                keywords: 'helidon, config, io.helidon.metrics.api.ScopeConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_metrics_api_ScopeConfig', 'config/io_helidon_metrics_api_ScopeConfig', {})
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
                hasNav: false
            },
            component: loadPage('mp-metrics-micrometer', 'mp/metrics/micrometer', {})
        },
        {
            path: '/config/io_helidon_tracing_providers_jaeger_JaegerTracerBuilder',
            meta: {
                h1: 'Tracer (tracing)構成',
                title: 'Tracer (tracing)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.tracing.Tracer',
                keywords: 'helidon, config, io.helidon.tracing.Tracer',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_tracing_providers_jaeger_JaegerTracerBuilder', 'config/io_helidon_tracing_providers_jaeger_JaegerTracerBuilder', {})
        },
        {
            path: '/config/io_helidon_webclient_api_HttpClientConfig',
            meta: {
                h1: 'HttpClientConfig (webclient.api)構成',
                title: 'HttpClientConfig (webclient.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.api.HttpClientConfig',
                keywords: 'helidon, config, io.helidon.webclient.api.HttpClientConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_api_HttpClientConfig', 'config/io_helidon_webclient_api_HttpClientConfig', {})
        },
        {
            path: '/config/io_helidon_webclient_api_Proxy',
            meta: {
                h1: 'Proxy (webclient.api)構成',
                title: 'Proxy (webclient.api)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webclient.api.Proxy',
                keywords: 'helidon, config, io.helidon.webclient.api.Proxy',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webclient_api_Proxy', 'config/io_helidon_webclient_api_Proxy', {})
        },
        {
            path: '/mp/guides/upgrade',
            meta: {
                h1: 'Helidon MP 2.xアップグレード・ガイド',
                title: 'Helidon MP 2.xアップグレード・ガイド',
                h1Prefix: 'MP',
                description: 'Helidon MP Upgrade Guide',
                keywords: 'helidon, porting, migration, upgrade, incompatibilities',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('mp-guides-upgrade', 'mp/guides/upgrade', {})
        },
        {
            path: '/config/io_helidon_webserver_ListenerConfig',
            meta: {
                h1: 'ListenerConfig (webwebserver)構成',
                title: 'ListenerConfig (webwebserver)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.webserver.ListenerConfig',
                keywords: 'helidon, config, io.helidon.webserver.ListenerConfig',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_webserver_ListenerConfig', 'config/io_helidon_webserver_ListenerConfig', {})
        },
        {
            path: '/config/io_helidon_common_configurable_AllowList',
            meta: {
                h1: 'AllowList (common.configurable)構成',
                title: 'AllowList (common.configurable)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.configurable.AllowList',
                keywords: 'helidon, config, io.helidon.common.configurable.AllowList',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_configurable_AllowList', 'config/io_helidon_common_configurable_AllowList', {})
        },
        {
            path: '/config/io_helidon_common_tls_Tls',
            meta: {
                h1: 'Tls (common.tls)構成',
                title: 'Tls (common.tls)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.tls.Tls',
                keywords: 'helidon, config, io.helidon.common.tls.Tls',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_tls_Tls', 'config/io_helidon_common_tls_Tls', {})
        },
        {
            path: '/config/io_helidon_common_pki_KeystoreKeys',
            meta: {
                h1: 'KeystoreKeys (common.pki)構成',
                title: 'KeystoreKeys (common.pki)構成',
                h1Prefix: null,
                description: 'Configuration of io.helidon.common.pki.KeystoreKeys',
                keywords: 'helidon, config, io.helidon.common.pki.KeystoreKeys',
                customLayout: null,
                hasNav: false
            },
            component: loadPage('config-io_helidon_common_pki_KeystoreKeys', 'config/io_helidon_common_pki_KeystoreKeys', {})
        },
        {
            path: '/', redirect: 'about/doc_overview'
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
            title: 'Helidonドキュメント',
            to: '/about/doc_overview',
            action: 'lightbulb'
        },
        {
            type: 'page',
            title: '開始',
            to: '/about/prerequisites',
            action: 'rocket_launch'
        },
        {
            type: 'groups',
            items: [
                {
                    type: 'group',
                    title: 'Helidon MP',
                    group: '/mp',
                    items: [
                        {
                            type: 'page',
                            title: '導入',
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
                            title: 'CORS',
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
                            type: 'page',
                            title: 'GraphQLサーバー',
                            to: '/mp/graphql',
                            action: 'graphic_eq'
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
                            title: 'ヘルス・チェック',
                            to: '/mp/health',
                            action: 'favorite_outline'
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
                                    title: 'Neo4j',
                                    to: '/mp/integrations/neo4j',
                                    action: null
                                }
                            ],
                            action: 'filter_drama'
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
                                    title: 'Jakarta REST',
                                    to: '/mp/jaxrs/jaxrs-applications',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Jakarta RESTクライアント',
                                    to: '/mp/jaxrs/jaxrs-client',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidonコネクタ',
                                    to: '/mp/jaxrs/helidon-connector',
                                    action: null
                                }
                            ],
                            action: 'settings_ethernet'
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
                                    title: 'OpenMetrics Exemplarサポート',
                                    to: '/mp/metrics/prometheus-exemplar-support',
                                    action: null
                                }
                            ],
                            action: 'av_timer'
                        },
                        {
                            type: 'menu',
                            title: 'OpenAPI',
                            group: '/mp/openapi',
                            items: [
                                {
                                    type: 'page',
                                    title: 'HelidonのOpenAPI',
                                    to: '/mp/openapi/openapi',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'OpenAPIベースのコード生成',
                                    to: '/mp/openapi/openapi-generator',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'OpenAPI UI',
                                    to: '/mp/openapi/openapi-ui',
                                    action: null
                                }
                            ],
                            action: 'donut_large'
                        },
                        {
                            type: 'page',
                            title: '永続性',
                            to: '/mp/persistence',
                            action: 'dns'
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
                                    title: 'Kafka Connector',
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
                                    title: 'WebLogic JMSコネクタ',
                                    to: '/mp/reactivemessaging/weblogic',
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
                            type: 'page',
                            title: 'RESTクライアント',
                            to: '/mp/restclient',
                            action: 'airplay'
                        },
                        {
                            type: 'page',
                            title: 'スケジューリング',
                            to: '/mp/scheduling',
                            action: 'access_alarm'
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
                            title: 'サーバー',
                            to: '/mp/server',
                            action: 'settings_ethernet'
                        },
                        {
                            type: 'page',
                            title: 'パフォーマンス情報の送信',
                            to: '/mp/telemetry',
                            action: 'analytics'
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
                                    title: 'テストNGによるテスト',
                                    to: '/mp/testing-ng',
                                    action: null
                                }
                            ],
                            action: 'thumbs_up_down'
                        },
                        {
                            type: 'page',
                            title: 'トレース',
                            to: '/mp/tracing',
                            action: 'timeline'
                        },
                        {
                            type: 'page',
                            title: 'Websocket',
                            to: '/mp/websocket',
                            action: 'sync_alt'
                        }
                    ],
                    action: null
                },
                {
                    type: 'group',
                    title: 'Helidon SE',
                    group: '/se',
                    items: [
                        {
                            type: 'page',
                            title: '導入',
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
                                    to: '/se/guides/upgrade',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE 3.xアップグレード・ガイド',
                                    to: '/se/guides/upgrade_3x',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'Helidon SE 4.xアップグレード・ガイド',
                                    to: '/se/guides/upgrade_4x',
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
                            title: 'CORS',
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
                            type: 'page',
                            title: 'フォルト・トレランス',
                            to: '/se/fault-tolerance',
                            action: 'warning'
                        },
                        {
                            type: 'page',
                            title: 'GraphQLサーバー',
                            to: '/se/graphql',
                            action: 'graphic_eq'
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
                            title: 'ヘルス・チェック',
                            to: '/se/health',
                            action: 'favorite_outline'
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
                                    title: 'Exemplarsのメトリクス・サポート',
                                    to: '/se/metrics/prometheus-exemplar-support',
                                    action: null
                                }
                            ],
                            action: 'av_timer'
                        },
                        {
                            type: 'menu',
                            title: 'OpenAPI',
                            group: '/se/openapi',
                            items: [
                                {
                                    type: 'page',
                                    title: 'HelidonのOpenAPI',
                                    to: '/se/openapi/openapi',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'OpenAPIベースのコード生成',
                                    to: '/se/openapi/openapi-generator',
                                    action: null
                                },
                                {
                                    type: 'page',
                                    title: 'OpenAPI UI',
                                    to: '/se/openapi/openapi-ui',
                                    action: null
                                }
                            ],
                            action: 'donut_large'
                        },
                        {
                            type: 'page',
                            title: '可観測性',
                            to: '/se/observability',
                            action: 'search'
                        },
                        {
                            type: 'page',
                            title: 'リアクティブ・メッセージング',
                            to: '/se/reactive-messaging',
                            action: 'message'
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
                            title: 'Webサーバー',
                            to: '/se/webserver',
                            action: 'settings_ethernet'
                        },
                        {
                            type: 'page',
                            title: 'スケジューリング',
                            to: '/se/scheduling',
                            action: 'access_alarm'
                        },
                        {
                            type: 'menu',
                            title: 'セキュリティ',
                            group: '/se/security',
                            items: [
                                {
                                    type: 'page',
                                    title: 'セキュリティの紹介',
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
                                    title: 'WebServer統合',
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
                            title: 'サーバー送信イベント(SSE)',
                            to: '/se/sse/sse',
                            action: 'outbox'
                        },
                        {
                            type: 'page',
                            title: 'テスト',
                            to: '/se/testing',
                            action: 'thumbs_up_down'
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
                            title: 'Websocket',
                            to: '/se/websocket',
                            action: 'sync_alt'
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
