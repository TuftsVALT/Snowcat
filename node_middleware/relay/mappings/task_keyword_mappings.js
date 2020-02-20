const proto = require("../proto.js")
const task_keyword_mappings = {
    undefined: proto.TaskKeyword.TASK_KEYWORD_UNDEFINED,

    classification: proto.TaskKeyword.CLASSIFICATION,
    regression: proto.TaskKeyword.REGRESSION,
    clustering: proto.TaskKeyword.CLUSTERING,
    linkPrediction: proto.TaskKeyword.LINK_PREDICTION,
    vertexNomination: proto.TaskKeyword.VERTEX_NOMINATION,
    vertexClassification: proto.TaskKeyword.VERTEX_CLASSIFICATION,
    communityDetection: proto.TaskKeyword.COMMUNITY_DETECTION,
    graphMatching: proto.TaskKeyword.GRAPH_MATCHING,
    forecasting: proto.TaskKeyword.FORECASTING,
    collaborativeFiltering: proto.TaskKeyword.COLLABORATIVE_FILTERING,
    objectDectection: proto.TaskKeyword.OBJECT_DETECTION,
    semiSupervised: proto.TaskKeyword.SEMISUPERVISED,
    binary: proto.TaskKeyword.BINARY,
    multiClass: proto.TaskKeyword.MULTICLASS,
    multilabel: proto.TaskKeyword.MULTILABEL,
    univariate: proto.TaskKeyword.UNIVARIATE,
    multivariate: proto.TaskKeyword.MULTIVARIATE,
    overlapping: proto.TaskKeyword.OVERLAPPING,
    nonoverlapping: proto.TaskKeyword.NONOVERLAPPING,
    tabular: proto.TaskKeyword.TABULAR,
    relational: proto.TaskKeyword.RELATIONAL,
    image: proto.TaskKeyword.IMAGE,
    audio: proto.TaskKeyword.AUDIO,
    video: proto.TaskKeyword.VIDEO,
    speech: proto.TaskKeyword.SPEECH,
    text: proto.TaskKeyword.TEXT,
    graph: proto.TaskKeyword.GRAPH,
    multiGraph: proto.TaskKeyword.MULTIGRAPH,
    timeSeries: proto.TaskKeyword.TIME_SERIES,
    grouped: proto.TaskKeyword.GROUPED,
    geospatial: proto.TaskKeyword.GEOSPATIAL,
    remoteSensing: proto.TaskKeyword.REMOTE_SENSING,
    lupi: proto.TaskKeyword.LUPI,
    missingMetadata: proto.TaskKeyword.MISSING_METADATA,

    //   undefined: proto.TaskKeyword.TASK_KEYWORD_UNDEFINED,
    //   classification: proto.TaskKeyword.CLASSIFICATION,
    //   regression: proto.TaskKeyword.REGRESSION,
    //   clustering: proto.TaskKeyword.CLUSTERING,
    //   linkPrediction: proto.TaskKeyword.LINK_PREDICTION,
    //   vertexNomination: proto.TaskKeyword.VERTEX_NOMINATION,
    //   vertexClassification: proto.TaskKeyword.VERTEX_CLASSIFICATION,
    //   communityDetection: proto.TaskKeyword.COMMUNITY_DETECTION,
    //   // graphClustering: proto.TaskKeyword.GRAPH_CLUSTERING,
    //   graphMatching: proto.TaskKeyword.GRAPH_MATCHING,
    //   timeSeriesForecasting: proto.TaskKeyword.TIME_SERIES_FORECASTING,
    //   collaborativeFiltering: proto.TaskKeyword.COLLABORATIVE_FILTERING,
    //   objectDectection: proto.TaskKeyword.OBJECT_DETECTION,
    //   semiSupervisedClassification: proto.TaskKeyword.SEMISUPERVISED_CLASSIFICATION,
    //   semiSupervisedRegression: proto.TaskKeyword.SEMISUPERVISED_REGRESSION
}
module.exports = task_keyword_mappings