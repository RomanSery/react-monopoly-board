interface SquareThemeData {
  readonly name: string;
  readonly icon?: string;
}

export const NyThemeData = new Map<number, SquareThemeData>();
NyThemeData.set(1, { name: "<- Go" });
NyThemeData.set(2, { name: "Gravesend" });
NyThemeData.set(4, { name: "Sheepshead bay" });

NyThemeData.set(5, { name: "Governors Island" });

NyThemeData.set(6, { name: "JFK" });


NyThemeData.set(7, { name: "Canarsie" });
NyThemeData.set(9, { name: "Brownsville" });
NyThemeData.set(10, { name: "Bushwick" });

NyThemeData.set(12, { name: "Forest Hills" });
NyThemeData.set(14, { name: "Rego Park" });
NyThemeData.set(15, { name: "Astoria" });

NyThemeData.set(16, { name: "Newark" });

NyThemeData.set(17, { name: "Dumbo" });
NyThemeData.set(18, { name: "MTA", icon: "subway" });
NyThemeData.set(19, { name: "Clinton Hill" });
NyThemeData.set(20, { name: "Park Slope" });

NyThemeData.set(22, { name: "Hell's Kitchen" });
NyThemeData.set(24, { name: "Chelsea" });
NyThemeData.set(25, { name: "West Village" });

NyThemeData.set(26, { name: "La Guardia" });

NyThemeData.set(27, { name: "Gramercy" });
NyThemeData.set(29, { name: "Chinatown" });
NyThemeData.set(30, { name: "Greenwich Village" });

NyThemeData.set(32, { name: "Times Square" });
NyThemeData.set(34, { name: "Midtown" });
NyThemeData.set(35, { name: "Columbus Circle" });

NyThemeData.set(36, { name: "Albany" });

NyThemeData.set(37, { name: "Con Edison" });

NyThemeData.set(38, { name: "Tribeca" });
NyThemeData.set(40, { name: "Wall Street" });
