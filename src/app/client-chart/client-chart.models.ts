import { ChartNode } from "../org-chart";

export interface ClientChartNode extends ChartNode {
    id?: string;
    type?: NodeType;
}

export enum ClientTypes {
    Client1 = "Client 1",
    Client2 = "Client 2",
    Joint = "Joint",
}

export enum EntityTypes {
    Company = "Company",
    SMSF = "SMSF",
    Trust = "Trust",
}

export enum EntityGroupTypes {
    Stakeholders = "Stake Holders",
    Members = "Members",
}

export enum GroupTypes {
    Dependants = "Dependants",
    NonDependents = "Non-Dependants",
    Family = "Family",
    Parents = "Parents",
}

export enum RelationshipTypes {
    Dependant = "Dependant",
    NonDependant = "Non-Dependant",
    Parent = "Parent",
    Stakeholder = "Stake Holder",
    Member = "Member",
}

export const NodeType = { ...ClientTypes, ...EntityTypes, ...EntityGroupTypes, ...GroupTypes, ...RelationshipTypes };
export type NodeType = ClientTypes | EntityTypes | EntityGroupTypes | GroupTypes | RelationshipTypes;

export interface ClientNode extends ClientChartNode {}
export interface GroupNode extends ClientChartNode {}
export interface EntityNode extends ClientChartNode {}
