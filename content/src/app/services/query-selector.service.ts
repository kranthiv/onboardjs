import { Injectable, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from "@angular/platform-browser";

@Injectable()
export class QuerySelectorService {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  generateSelector(el) {
    let selector = "";
    let tree = $(el).parentsUntil(document);

    // generate full selector by traversing DOM from bottom-up
    console.clear();
    for (let i = -1; i < tree.length; i++) {
      let e = i < 0 ? el : tree[i];

      let eCSS = this.querifyElement(e);
      console.log("selectors from selected element", eCSS);
      let query = eCSS.query + (selector.length ? ' > ' : '') + selector;

      let matches = $(query);
      console.log("QUERY: " + query);

      if (matches.length === 1 && matches[0] === el) {
        console.log('   single match (result)');
        return query;
      }
      else if (matches.length > 1 && i + 1 < tree.length) {
        console.log('   many matches');

        let parentQuery = this.generateSelector(tree[i + 1]);
        let parentMatches = $(parentQuery).children(eCSS.tag);
        let nthQuery = eCSS.tag + ':nth-of-type(' + (parentMatches.index(el) + 1) + ')' + (selector.length ? ' > ' : '') + selector;
        let parentNthQuery = parentQuery + ' > ' + nthQuery;
        let nthMatches = $(parentNthQuery);

        console.log("PARENT_QUERY: " + parentQuery);
        console.log("__ELEMENT__");
        console.log(e)
        console.log("__PARENT__");
        console.log($(parentQuery)[0])
        console.log("__PARENT_MATCHES__");
        console.log(parentMatches)
        console.log("PARENT_NTH_QUERY: " + parentNthQuery);

        if (nthMatches.length === 1 && nthMatches[0] === el) {
          console.log('   single match with nth-of-type (result)');
          return parentNthQuery;
        }
        else {
          // console.log('   many matches with nth-of-type (continue)');
          // selector = nthQuery;
          return 'ERROR';
        }
      }
      else {
        if (matches.length === 1) console.log("Matched incorrect element. (matches.length = " + matches.length + ")")
        else if (matches.length > 1) console.log("Multiple matches, but traversed entire tree (algorithm not being specific enough).")
        else console.log("Could not find match for tag/id/class selector. (matches.length = " + matches.length + ")")
        return 'ERROR';
      }
    }

    return selector;
  }

  // returns object with element information in query format
  private querifyElement(e) {
    if (!e) return null;
    let tag = e.tagName.toLowerCase();
    let ids = e.id ? '#' + e.id.trim().split(' ').join('#') : "";
    let classes = e.className ? '.' + this.constructClassQuery(e.className) : "";
    let query = tag + ids + classes;
    return {
      element: e,
      tag: tag,
      ids: ids,
      classes: classes,
      query: query
    }
  }
  private constructClassQuery(classCollection: string) {
    let classes: Array<string> = classCollection.trim().split(" ").filter((item) => {
      if (item.trim() !== '') return item.trim();
    });
    return classes.join(".");
  }
}
