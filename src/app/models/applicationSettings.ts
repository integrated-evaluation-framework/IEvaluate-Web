export class ApplicationSettings {
  abstraction: AbstractionSettings;
}

export class AbstractionSettings {
  minQuorumCount: number;
  minQuorumProportion: number;
  showAbstractorAssertionsBeforeQuorum: boolean;
}
