import { IDerivation, Document, Register, FilteredRecentChangesSource } from 'flow/Daniel/public/wikipedia/filtered-recent-changes';

// Implementation for derivation flow.yaml#/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/derivation.
export class Derivation implements IDerivation {
    filteredRecentChangesPublish(
        source: FilteredRecentChangesSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        let timestamp = source.timestamp
        let title = source.title;
        let user = source.user;
        let comment = source.comment;
        let log_type = source.log_type;
        
        // source.timestamp ? timestamp = source.timestamp : timestamp = undefined;
        // source.title ? title = source.title : title = undefined;
        // source.user ? user = source.user : user = undefined;
        // source.comment ? comment = source.comment : comment = undefined;
        // source.log_type ? log_type = source.log_type : log_type = undefined;

        let out = {
            timestamp: timestamp,
            title: title,
            user: user,
            comment: comment,
            log_type: log_type 
        }

        return [out];
    }
}
