
// Generated from collection schema flow.yaml?ptr=/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/schema.
// Referenced from flow.yaml#/collections/Daniel~1public~1wikipedia~1filtered-recent-changes.
export type Document = {
    comment?: string;
    log_type?: string;
    timestamp?: number;
    title?: string;
    user?: string;
};

// export type Document = {
//     comment: string;
//     log_type: string;
//     timestamp: number;
//     title: string;
//     user: string;
// };

// export type Document = any;

// The collection has one schema, used for both reads and writes.
export type SourceDocument = Document;
export type OutputDocument = Document;

// Generated from derivation register schema flow.yaml?ptr=/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/derivation/register/schema.
// Referenced from flow.yaml#/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/derivation.
export type Register = unknown;


// Generated from transform filtered-recent-changes as a re-export of collection estuary/public/wikipedia/recentchange.
// Referenced from flow.yaml#/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/derivation/transform/filtered-recent-changes."
import { SourceDocument as FilteredRecentChangesSource } from "./../../../estuary/public/wikipedia/recentchange";
export { SourceDocument as FilteredRecentChangesSource } from "./../../../estuary/public/wikipedia/recentchange";

// Generated from derivation flow.yaml#/collections/Daniel~1public~1wikipedia~1filtered-recent-changes/derivation.
// Required to be implemented by filter.ts.
export interface IDerivation {
    filteredRecentChangesPublish(
        source: FilteredRecentChangesSource,
        register: Register,
        previous: Register,
    ): OutputDocument[];
}
