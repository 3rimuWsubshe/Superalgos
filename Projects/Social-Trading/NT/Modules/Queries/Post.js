exports.newSocialTradingModulesQueriesPost = function newSocialTradingModulesQueriesPost() {
    /*
    This query retrieves a single Post.
    */
    let thisObject = {
        socialEntity: undefined,
        post: undefined,
        run: run,
        initialize: initialize,
        finalize: finalize
    }

    return thisObject

    function finalize() {
        thisObject.socialEntity = undefined
        thisObject.post = undefined
    }

    function initialize(queryReceived) {
        NT.projects.socialTrading.utilities.queriesValidations.socialValidations(queryReceived, thisObject)
        NT.projects.socialTrading.utilities.queriesValidations.postValidations(queryReceived, thisObject)
    }

    function run() {

        return addToResponse(thisObject.post)

        function addToResponse(post) {

            let postResponse = {
                originSocialPersonaId: post.originSocialPersonaId,
                targetSocialPersonaId: post.targetSocialPersonaId,
                originSocialTradingBotId: post.originSocialTradingBotId,
                targetSocialTradingBotId: post.targetSocialTradingBotId,
                originPostHash: post.originPostHash,
                targetPostHash: post.targetPostHash,
                postType: post.postType,
                timestamp: post.timestamp,
                fileKeys: post.fileKeys,
                repliesCount: post.replies.size,
                reactions: Array.from(post.reactions),
                reaction: post.reactionsBySocialEntity.get(thisObject.socialEntity.id)
            }

            return postResponse
        }
    }
}