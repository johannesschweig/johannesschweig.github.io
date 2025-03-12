import{p as a,P as u}from"./ProjectArrows-CzT32TjW.js";import{S as d}from"./StyledImage-g8yxrW6z.js";import{b as h}from"./index-Bh5pGfok.js";import{_ as c,c as p,b as t,a as e,r as s,o as m}from"./index-CgvWWY5l.js";const f={components:{"project-header":u,"styled-image":d,"project-arrows":a},methods:{buildURL(n){return h(n)}}},w={class:"responsive"},y=e("h4",null,"TL;DR",-1),b=e("p",null,"I helped to build a functionality which lets users filter their data based on multiple, nested criteria.",-1),g=e("h4",null,"Problem",-1),_=e("p",null,"During my time at KNIME I was asked to create an interface for a node (KNIME term for encapsulated functionality) where users can filter their data based on multiple rules (e.g. filter out all rows in the data where the year column is smaller than 2016).",-1),v=e("p",null,"The existing solution only supported one rule and the aim was to extend the functionality, so it could also work with multiple rules and it should be possible to nest rules (e.g. [condition A AND condition B] OR condition C). Users would not have to worry anymore about writing their queries in SQL because they could comfortably build them in a UI. This has several advantages:",-1),I=e("ul",null,[e("li",null,"Avoiding typos by using dropdowns and other UI components"),e("li",null,"Faster rule generation with suggestions (e.g. possible values of columns)"),e("li",null,"Better understanding through hierarchical display of rules (if you have once tried to make sense of another person's excel formulas, you know what I mean)")],-1),q=e("h4",null,"Research",-1),U=e("p",null,"I researched about how others have tried to solve this problem and found a number of different user interfaces. Some of them represented their rules as a graph, some of them as a nested list. And they also differed in how they made the actions such as creating or deleting rules available to the user.",-1),R=e("h4",null,"Ideation",-1),A=e("p",null,"Then I proceeded to explore the problem space with sketches. This brought up questions such as:",-1),T=e("ul",null,[e("li",null,"How many different combinations of nested rules could there be? (A lot)"),e("li",null,"How do you present the rules to the user? Inline forms / Graph preview / treeview preview? (see image below)"),e("li",null,"Do you connect items in a group with an AND/OR or do you set it to the top of the group?")],-1),L=e("p",null,"Trying to answer those questions helped to find possible solutions, narrowed the problem space, but also improved my understanding of the domain (Querying a database).",-1),j=e("h4",null,"Variations",-1),k=e("p",null,"I came up with a variation where the rules were laid out top to bottom, groups were indicated by different colored rectangles and you could edit the rules right in place (see inline form in image above). It quickly came apparent that this solution would fit for easy queries with few rules and few nesting levels, but not for very complex queries. Then I designed a version where you would have a preview section on one side and an edit section on the other. This would allow for easier layouting as you would only have to display the currently selected rule. All other rules were displayed with a small label. The display of the preview varied: vertical graph, horizontal graph or treeview.",-1),x=e("h4",null,"Testing",-1),N=e("p",null,'I created a small paper protoype and showed it to different colleagues. During the test the colleague had to press the buttons on the paper and I would (as responsively as I could) "slide in" the new UI elements ("Wizard of Oz prototyping"). After testing we decided that the AND/OR of groups should be positioned on top of them and not between the rules as our participants prefered by this. .',-1),D=e("p",null,"In the end we decided for the treeview as it was easier to implement as the other concepts, was recognized as a familiar component by the users and also showed good results in user interaction.",-1);function B(n,Q,z,O,S,o){const l=s("project-header"),r=s("styled-image"),i=s("project-arrows");return m(),p("div",null,[t(l,{route:"/querybuilder"}),e("div",w,[y,b,g,t(r,{src:o.buildURL("querybuilder/sql.png"),alt:"The beauty of SQL"},null,8,["src"]),_,v,I,q,t(r,{src:o.buildURL("querybuilder/querybuilders.png"),alt:"Querybuilders by jQuery (left) and Microsoft Outlook (right)"},null,8,["src"]),U,R,A,T,L,j,t(r,{src:o.buildURL("querybuilder/variations.png"),alt:"Variations of rule representations: vertical graph, treeview, inline form, horizontal graph"},null,8,["src"]),k,x,t(r,{src:o.buildURL("querybuilder/concept.png"),alt:"Final UI concept"},null,8,["src"]),N,D,t(r,{src:o.buildURL("querybuilder/row-filter.png"),alt:"User interface as of KNIME Analytics Platform v3.7.1"},null,8,["src"])]),t(i,{route:"/querybuilder"})])}const H=c(f,[["render",B]]);export{H as default};
